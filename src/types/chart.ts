export enum EChartTypes {
  TEMPERATURE = 'temperature',
  PRECIPITATION = 'precipitation',
}

export type ChartDataType = {
  t: string;
  v: number;
};

export type PreparedChardDataType = {
  data: ChartDataType[];
  min: number;
  max: number;
  tableType: EChartTypes;
};
