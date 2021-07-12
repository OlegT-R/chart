import { DEFAULT_FROM_DATE, DEFAULT_TO_DATE } from '../constants/dates';

import { EChartTypes } from '../types/chart';
import { StorageDataType } from '../types/localstorage';
import { CustomStorageChangeType } from '../types/event';

const STORAGE_CHANGE_EVENT_NAME = 'customStorageChange';

const clear = () => {
  localStorage.clear();
};

const getData = (key: keyof StorageDataType) => {
  try {
    return JSON.parse(<string>localStorage.getItem(key));
  } catch (err) {
    return null;
  }
};

const setData = (
  key: keyof StorageDataType,
  data: StorageDataType[keyof StorageDataType],
) => {
  try {
    const serial = JSON.stringify(data);
    localStorage.setItem(key, serial);

    // sending custom change store event
    const evt: CustomStorageChangeType = document.createEvent('CustomEvent');
    evt.initCustomEvent(STORAGE_CHANGE_EVENT_NAME, true, false, {
      name: key,
      data,
    });
    document.dispatchEvent(evt);
  } catch (err) {
    if (err === 'QUOTA_EXCEEDED_ERR') {
      clear();
      const serial = JSON.stringify(data);
      localStorage.setItem(key, serial);
    }
  }
};

// subscribe to changing store by key
const subscribe = (
  key: keyof StorageDataType,
  cb: (data: StorageDataType[keyof StorageDataType]) => void,
) => {
  window.addEventListener(
    STORAGE_CHANGE_EVENT_NAME,
    (event: CustomStorageChangeType) => {
      if (event.detail.name === key) {
        cb(event.detail.data);
      }
    },
  );
};

const initLocalStorage = (initState: StorageDataType) => {
  for (const key in initState) {
    // eslint-disable-next-line no-prototype-builtins
    if (initState.hasOwnProperty(key)) {
      setData(
        key as keyof StorageDataType,
        initState[key as keyof StorageDataType],
      );
    }
  }
};

const appStateStorage = (initState: StorageDataType) => {
  initLocalStorage(initState);
  return {
    getData,
    setData,
    clear,
    subscribe,
  };
};

export default appStateStorage({
  chartType: EChartTypes.TEMPERATURE,
  fromValue: DEFAULT_FROM_DATE,
  toValue: DEFAULT_TO_DATE,
  from: DEFAULT_FROM_DATE,
  to: DEFAULT_TO_DATE,
});
