import { markup } from './markup';
import style from './style';

import Button from '../button';
import Select from '../select';
import LineChart from '../chart';

import { ESelectTypes } from '../../types/select';
import { EChartTypes } from '../../types/chart';
import { IBaseComponent } from '../../types/component';

const AppBlock = (initAppPromise: Promise<void[]>): IBaseComponent => {
  const html = document.createElement('div');
  html.id = 'app-block';
  html.innerHTML = markup;

  // init components
  const temperatureBtn = Button({
    name: EChartTypes.TEMPERATURE,
    text: 'Температура',
  });

  const precipitationBtn = Button({
    name: EChartTypes.PRECIPITATION,
    text: 'Осадки',
  });

  const fromDateSelect = Select({ name: ESelectTypes.FROM_DATE });
  const toDateSelect = Select({ name: ESelectTypes.TO_DATE });

  const lineChart = LineChart(initAppPromise);

  // appending btns
  const leftFirstBtnPlace = html.querySelector('.left-btn__first');
  leftFirstBtnPlace && leftFirstBtnPlace.appendChild(temperatureBtn.html);
  const leftSecondBtnPlace = html.querySelector('.left-btn__second');
  leftSecondBtnPlace && leftSecondBtnPlace.appendChild(precipitationBtn.html);

  // appending select
  const rightFirstSelectPlace = html.querySelector('.right-select__first');
  rightFirstSelectPlace &&
    rightFirstSelectPlace.appendChild(fromDateSelect.html);
  const rightSecondSelectPlace = html.querySelector('.right-select__second');
  rightSecondSelectPlace &&
    rightSecondSelectPlace.appendChild(toDateSelect.html);

  // appending chart
  const rightChartPlace = html.querySelector('.content__right');
  rightChartPlace && rightChartPlace.appendChild(lineChart.html);

  return {
    html,
    style: [
      style,
      temperatureBtn.style[0],
      fromDateSelect.style[0],
      lineChart.style[0],
    ],
  };
};

export default AppBlock;
