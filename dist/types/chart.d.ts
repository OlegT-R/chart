export declare enum EChartTypes {
    TEMPERATURE = "temperature",
    PRECIPITATION = "precipitation"
}
export declare type ChartDataType = {
    t: string;
    v: number;
};
export declare type PreparedChardDataType = {
    data: ChartDataType[];
    min: number;
    max: number;
    tableType: EChartTypes;
};
