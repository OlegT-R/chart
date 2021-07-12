import { EChartTypes } from '../../types/chart';
import { IBaseComponent } from '../../types/component';
export declare type ButtonOuterPropsType = {
    name: EChartTypes;
    text: string;
};
export declare type ButtonConnectPropsType = {
    isActive: boolean;
    onClick: (name: EChartTypes) => void;
};
export declare type ButtonPropsType = ButtonOuterPropsType & ButtonConnectPropsType;
declare const _default: ({ name, text }: ButtonOuterPropsType) => IBaseComponent<ButtonPropsType>;
export default _default;
