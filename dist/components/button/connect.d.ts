import { ButtonOuterPropsType, ButtonPropsType } from './index';
import { IBaseComponent } from '../../types/component';
export declare const buttonConnectHoc: (Button: (props: ButtonPropsType) => IBaseComponent<ButtonPropsType>) => ({ name, text }: ButtonOuterPropsType) => IBaseComponent<ButtonPropsType>;
