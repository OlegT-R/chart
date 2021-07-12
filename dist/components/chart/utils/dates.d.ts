export declare const getAxisDateLabels: (from: string, to: string) => Date[];
export declare const getDateText: (date: string | Date, from: string, to: string) => string;
export declare const getMonthDiff: (dateFrom: Date, dateTo: Date) => number;
export declare const getPixelOffsetToDate: (from: string | Date, to: string | Date, date: string | Date, workWidth: number) => number;
export declare const prepareFromDate: (fromYear: string | number) => string;
export declare const prepareToDate: (toYear: string | number) => string;
