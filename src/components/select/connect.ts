import appStateStorage from '../../models/localstorage';
import { SelectOuterPropsType, SelectPropsType } from './index';

import { IBaseComponent } from '../../types/component';
import { ESelectTypes } from '../../types/select';

export const selectConnectHoc = (
  Select: (props: SelectPropsType) => IBaseComponent<SelectPropsType>,
) => ({ name }: SelectOuterPropsType) => {
  const valueName = name === ESelectTypes.TO_DATE ? 'toValue' : 'fromValue';

  const from = appStateStorage.getData('from');
  const to = appStateStorage.getData('to');
  const value = appStateStorage.getData(valueName);
  const onChange = (name: ESelectTypes, value: number) =>
    appStateStorage.setData(valueName, value);

  const select = Select({ name, from, to, value, onChange });
  // if select is toDate (end date) we should check fromDate and cut dates
  if (name === ESelectTypes.TO_DATE) {
    appStateStorage.subscribe('fromValue', value => {
      if (typeof select !== 'undefined') {
        // @ts-ignore
        select.update({ from: value + 1 });
      }
    });
  }
  return select;
};
