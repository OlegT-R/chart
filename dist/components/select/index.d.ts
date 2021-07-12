import { ESelectTypes } from '../../types/select';
import { IBaseComponent } from '../../types/component';
export declare type SelectOuterPropsType = {
    name: ESelectTypes;
};
export declare type SelectConnectPropsType = {
    value: number;
    from?: number;
    to?: number;
    onChange: (name: ESelectTypes, value: number) => void;
};
export declare type SelectPropsType = SelectOuterPropsType & SelectConnectPropsType;
declare const _default: ({ name }: SelectOuterPropsType) => IBaseComponent<SelectPropsType>;
export default _default;
