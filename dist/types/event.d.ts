import { StorageDataType } from "./localstorage";
export declare type EventDetailType<T = StorageDataType> = {
    name: keyof T;
    data: T[keyof T];
};
export declare type CustomStorageChangeType = CustomEvent<EventDetailType>;
