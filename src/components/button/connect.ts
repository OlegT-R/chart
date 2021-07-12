import appStateStorage from '../../models/localstorage';
import { ButtonOuterPropsType, ButtonPropsType } from './index';

import { IBaseComponent } from '../../types/component';
import { EChartTypes } from '../../types/chart';

export const buttonConnectHoc = (
  Button: (props: ButtonPropsType) => IBaseComponent<ButtonPropsType>,
) => ({ name, text }: ButtonOuterPropsType) => {
  const chartType = appStateStorage.getData('chartType');
  const onClick = (name: EChartTypes) =>
    appStateStorage.setData('chartType', name);

  const btn = Button({ name, isActive: chartType === name, text, onClick });
  appStateStorage.subscribe('chartType', type => {
    if (typeof btn !== 'undefined') {
      // @ts-ignore
      btn.update({ isActive: type === name });
    }
  });
  return btn;
};
