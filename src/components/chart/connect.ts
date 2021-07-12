import appStateStorage from '../../models/localstorage';
import {prepareFromDate, prepareToDate} from './utils/dates';
import indexedDbStorage from '../../models/database';

import {ChartPropsType} from './index';
import {IBaseComponent} from '../../types/component';
import {EChartTypes} from '../../types/chart';

const getPreparedChartData = async (
  initAppPromise: Promise<void[]>,
  chartType: EChartTypes,
  from: string,
  to: string,
) => {
  await initAppPromise;
  return indexedDbStorage.getValues(chartType, from, to);
};

export const chartConnectHoc = (
  Chart: (props: ChartPropsType) => IBaseComponent<ChartPropsType>,
) => (initAppPromise: Promise<void[]>) => {
  const chartType = appStateStorage.getData('chartType');
  let from = prepareFromDate(appStateStorage.getData('fromValue'));
  let to = prepareToDate(appStateStorage.getData('toValue'));

  // getting prepared data from IndexedDb
  const data = getPreparedChartData(initAppPromise, chartType, from, to);
  const chart = Chart({
    data,
    from,
    to,
  });

  // TODO: improve subscribe to array key ['fromValue', 'toValue']
  appStateStorage.subscribe('fromValue', (nextFrom: number) => {
    if (typeof chart !== 'undefined') {
      from = prepareFromDate(nextFrom);

      const nextData = getPreparedChartData(initAppPromise, chartType, from, to);
      // @ts-ignore
      chart.update({ to, data: nextData, from });
    }
  });
  appStateStorage.subscribe('toValue', (nextTo: number) => {
    if (typeof chart !== 'undefined') {
      to = prepareToDate(nextTo);
      const nextData = getPreparedChartData(initAppPromise, chartType, from, to);
      // @ts-ignore
      chart.update({ from, data: nextData, to });
    }
  });

  // TODO: add abort system (only last getValues)
  appStateStorage.subscribe('chartType', (chartType: EChartTypes) => {
    if (typeof chart !== 'undefined') {
      const nextData = getPreparedChartData(initAppPromise, chartType, from, to);
      // @ts-ignore
      chart.update({ from, data: nextData, to });
    }
  });

  return chart;
};
