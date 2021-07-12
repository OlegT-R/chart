import { EChartTypes } from "./chart";

export type StorageDataType = {
  chartType: EChartTypes;
  from: number;
  to: number;
  fromValue: number;
  toValue: number;
}
