import { TableType } from '../types/database';
import { INDEXED_DB_NAME, STATISTIC_DB_TABLES_SCHEMA, INDEXED_DB_VERSION } from '../constants/database';
import { EChartTypes, ChartDataType, PreparedChardDataType } from '../types/chart';

import {
  ERROR_GET_RECORD_COUNT_MESSAGE_TYPE, ERROR_GET_VALUES_MESSAGE_TYPE,
  ERROR_INIT_MESSAGE_TYPE,
  ERROR_SET_VALUE_MESSAGE_TYPE,
  GET_RECORD_COUNT_POST_TYPE, GET_VALUES_POST_TYPE,
  INIT_POST_TYPE,
  SET_VALUE_POST_TYPE,
  SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE, SUCCESS_GET_VALUES_MESSAGE_TYPE,
  SUCCESS_INIT_MESSAGE_TYPE,
  SUCCESS_SET_VALUE_MESSAGE_TYPE
  // @ts-ignore
} from '../constants/webworker.js';

const worker = new Worker('../webworkers/databaseWorker.js', { type: 'module' });

const initDb = (
  tables: TableType[],
  dbName: string,
  version: number,
): Promise<void> => {
  // TODO: maybe add promise wrapper to worker
  return new Promise((resolve, reject) => {
    worker.postMessage({ type: INIT_POST_TYPE, data: { tables, dbName, version } });
    const listener = (event: MessageEvent) => {
      if (event.data.type === SUCCESS_INIT_MESSAGE_TYPE) {
        worker.removeEventListener('message', listener);
        resolve();
      }
      if (event.data.type === ERROR_INIT_MESSAGE_TYPE) {
        worker.removeEventListener('message', listener);
        reject();
      }
    };
    worker.addEventListener('message', listener);
  });
};

const indexedDbStorage = (
  tables: TableType[],
  dbName: string,
  version: number,
) => {
  // init database (create db and tables)
  const initDbPromise = initDb(tables, dbName, version);

  // append values to table
  const setValues = async (
    table: EChartTypes,
    values: ChartDataType[],
  ): Promise<void> => {
    await initDbPromise;
    return new Promise((resolve, reject) => {
      worker.postMessage({ type: SET_VALUE_POST_TYPE, data: { table, values } });
      const listener = (event: MessageEvent) => {
        if (event.data.type === SUCCESS_SET_VALUE_MESSAGE_TYPE) {
          worker.removeEventListener('message', listener);
          return resolve();
        }
        if (event.data.type === ERROR_SET_VALUE_MESSAGE_TYPE) {
          worker.removeEventListener('message', listener);
          return reject();
        }
      };

      worker.addEventListener('message', listener);
    });
  };

  const getRecordCount = async (table: EChartTypes) => {
    await initDbPromise;
    worker.postMessage({ type: GET_RECORD_COUNT_POST_TYPE, data: { table } });
    return new Promise<number>((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        if (event.data.type === SUCCESS_GET_RECORD_COUNT_MESSAGE_TYPE) {
          worker.removeEventListener('message', listener);
          resolve(event.data.data);
        }
        if (event.data.type === ERROR_GET_RECORD_COUNT_MESSAGE_TYPE) {
          worker.removeEventListener('message', listener);
          reject(0);
        }
      };
      worker.addEventListener('message', listener);
    });
  };

  const getValues = async (table: EChartTypes, from: string, to: string) => {
    await initDbPromise;
    worker.postMessage({ type: GET_VALUES_POST_TYPE, data: { table, from, to } });
    return new Promise<PreparedChardDataType>((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        const {type, data}  = event.data
        if (type === SUCCESS_GET_VALUES_MESSAGE_TYPE && data.tableType === table) {
           worker.removeEventListener('message', listener);
          resolve(data);
        }
        if (type === ERROR_GET_VALUES_MESSAGE_TYPE && data.tableType === table) {
          worker.removeEventListener('message', listener);
          reject({});
        }
      };
      worker.addEventListener('message', listener);
    });
  };

  return {
    setValues,
    getRecordCount,
    getValues
  };
};

export default indexedDbStorage(STATISTIC_DB_TABLES_SCHEMA, INDEXED_DB_NAME, INDEXED_DB_VERSION);
