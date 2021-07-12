import { ChartPropsType } from './index';
import { IBaseComponent } from '../../types/component';
export declare const chartConnectHoc: (Chart: (props: ChartPropsType) => IBaseComponent<ChartPropsType>) => (initAppPromise: Promise<void[]>) => IBaseComponent<ChartPropsType>;
