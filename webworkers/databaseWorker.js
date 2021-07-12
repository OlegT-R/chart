import * as constants from '../src/constants/webworker.js';
import * as downSample from '../src/libs/lttb.js';
const {
  ERROR_GET_RECORD_COUNT_MESSAGE_TYPE,
  ERROR_INIT_MESSAGE_TYPE,
  ERROR_SET_VALUE_MESSAGE_TYPE,
  GET_RECORD_COUNT_POST_TYPE,
  INIT_POST_TYPE,
  SET_VALUE_POST_TYPE,
  SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE,
  SUCCESS_INIT_MESSAGE_TYPE,
  SUCCESS_SET_VALUE_MESSAGE_TYPE,
  GET_VALUES_POST_TYPE,
  SUCCESS_GET_VALUES_MESSAGE_TYPE,
  ERROR_GET_VALUES_MESSAGE_TYPE,
} = constants;
let db;

self.onmessage = function(event) {
  const { type, data } = event.data;
  switch (type) {
    case INIT_POST_TYPE:
      {
        if (db) {
          return self.postMessage({ type: SUCCESS_INIT_MESSAGE_TYPE });
        }
        const openRequest = indexedDB.open(data.dbName, data.version);

        openRequest.onsuccess = function() {
          db = openRequest.result;
          self.postMessage({ type: SUCCESS_INIT_MESSAGE_TYPE });
        };

        openRequest.onupgradeneeded = function(e) {
          db = e.target.result;
          data.tables.forEach(table => {
            if (db && !db.objectStoreNames.contains(table.name)) {
              db.createObjectStore(table.name, { keyPath: table.key });
            }
          });
          const transaction = e.target.transaction;
          transaction.oncomplete = () => {
            self.postMessage({ type: SUCCESS_INIT_MESSAGE_TYPE });
          };
          transaction.onerror = function() {
            self.postMessage({ type: ERROR_INIT_MESSAGE_TYPE });
          };
        };
      }
      break;

    case SET_VALUE_POST_TYPE:
      {
        const transaction = db.transaction(data.table, 'readwrite');
        const transactionTable = transaction.objectStore(data.table);
        for (let i = 0; i < data.values.length; i++) {
          transactionTable.add(data.values[i]);
        }
        transaction.oncomplete = () => {
          self.postMessage({ type: SUCCESS_SET_VALUE_MESSAGE_TYPE });
        };
        transaction.onabort = () => {
          self.postMessage({ type: ERROR_SET_VALUE_MESSAGE_TYPE });
        };
      }
      break;
    case GET_RECORD_COUNT_POST_TYPE:
      {
        const store = db
          .transaction(data.table, 'readonly')
          .objectStore(data.table);
        const count = store.count();
        count.onsuccess = () => {
          self.postMessage({
            type: SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE,
            data: count.result,
          });
        };
        count.onerror = () => {
          self.postMessage({
            type: ERROR_GET_RECORD_COUNT_MESSAGE_TYPE,
            data: count.result,
          });
        };
      }
      break;
    case GET_VALUES_POST_TYPE:
      {
        const { from, to, table } = data;
        const store = db
          .transaction(table, 'readonly')
          .objectStore(table);

        const request = store.getAll(IDBKeyRange.bound(from, to));

        request.onsuccess = () => {
          const { min, max, data } = downSample.largestTriangleThreeBuckets(
            request.result,
            360,
          );
          self.postMessage({
            type: SUCCESS_GET_VALUES_MESSAGE_TYPE,
            data: {
              min,
              max,
              data,
              tableType: table
            },
          });
        };
        request.onerror = () => {
          self.postMessage({
            type: ERROR_GET_VALUES_MESSAGE_TYPE,
            data: {},
          });
        };
      }
      break;
  }
};
