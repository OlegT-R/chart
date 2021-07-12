import { IBaseComponent } from '../../types/component';
import { PreparedChardDataType } from '../../types/chart';
export declare type ChartPropsType = {
    data: Promise<PreparedChardDataType>;
    from: string;
    to: string;
};
declare const _default: (initAppPromise: Promise<void[]>) => IBaseComponent<ChartPropsType>;
export default _default;
