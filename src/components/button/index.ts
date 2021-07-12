import { markup } from './markup';
import style from './style';

import { buttonConnectHoc } from './connect';

import { EChartTypes } from '../../types/chart';
import { IBaseComponent } from '../../types/component';

export type ButtonOuterPropsType = {
  name: EChartTypes;
  text: string;
};

export type ButtonConnectPropsType = {
  isActive: boolean;
  onClick: (name: EChartTypes) => void;
};

export type ButtonPropsType = ButtonOuterPropsType & ButtonConnectPropsType;

const Button = ({
  name,
  isActive,
  text,
  onClick,
}: ButtonPropsType): IBaseComponent<ButtonPropsType> => {
  const html = document.createElement('div');
  html.id = `button-block#${name}`;
  html.classList.add('btn-block');
  html.innerHTML = markup(name, text);

  // getting button elements
  const button = html.querySelector('button');

  // subscribe to click on this button
  if (button) {
    isActive && button.classList.add('is-active');
    button.addEventListener('click', () => onClick(name));
  }

  // updating props cb
  const update = ({ isActive }: ButtonPropsType) => {
    if (button) {
      isActive
        ? button.classList.add('is-active')
        : button.classList.remove('is-active');
    }
  };

  return {
    html,
    style: [style],
    update,
  };
};

export default buttonConnectHoc(Button);
