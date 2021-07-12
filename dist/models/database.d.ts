import { EChartTypes, ChartDataType, PreparedChardDataType } from '../types/chart';
declare const _default: {
    setValues: (table: EChartTypes, values: ChartDataType[]) => Promise<void>;
    getRecordCount: (table: EChartTypes) => Promise<number>;
    getValues: (table: EChartTypes, from: string, to: string) => Promise<PreparedChardDataType>;
};
export default _default;
