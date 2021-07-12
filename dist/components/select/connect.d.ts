import { SelectOuterPropsType, SelectPropsType } from './index';
import { IBaseComponent } from '../../types/component';
export declare const selectConnectHoc: (Select: (props: SelectPropsType) => IBaseComponent<SelectPropsType>) => ({ name }: SelectOuterPropsType) => IBaseComponent<SelectPropsType>;
