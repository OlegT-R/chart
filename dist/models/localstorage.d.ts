import { EChartTypes } from '../types/chart';
declare const _default: {
    getData: (key: "from" | "to" | "toValue" | "fromValue" | "chartType") => any;
    setData: (key: "from" | "to" | "toValue" | "fromValue" | "chartType", data: number | EChartTypes) => void;
    clear: () => void;
    subscribe: (key: "from" | "to" | "toValue" | "fromValue" | "chartType", cb: (data: number | EChartTypes) => void) => void;
};
export default _default;
