import {StorageDataType} from "./localstorage";

export type EventDetailType<T = StorageDataType> =  {
  name: keyof T,
  data: T[keyof T]
}
export type CustomStorageChangeType = CustomEvent<EventDetailType>;
