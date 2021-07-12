import indexedDb from './database';
import { EChartTypes } from '../types/chart';
import { fetchChartData } from './fetch';
import { TEMPERATURE_PATH, PRECIPITATION_PATH } from '../constants/server';

export const initApp = async () => {
  const { getRecordCount, setValues } = indexedDb;
  const countTemperature = await getRecordCount(EChartTypes.TEMPERATURE);
  const countPrecipitation = await getRecordCount(EChartTypes.PRECIPITATION);
  const promises = []
  if (!countTemperature) {
    promises.push(fetchChartData(TEMPERATURE_PATH).then(temperature => {
      return setValues(EChartTypes.TEMPERATURE, temperature)
    }))
  }
  if (!countPrecipitation) {
    promises.push(fetchChartData(PRECIPITATION_PATH).then(precipitation => {
      return setValues(EChartTypes.PRECIPITATION, precipitation)
    }));
  }
  return Promise.all(promises)
};
