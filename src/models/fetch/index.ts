import { ChartDataType } from '../../types/chart';
import { HOST, PORT } from '../../constants/server';

export const fetchChartData = async (url: string): Promise<ChartDataType[]> => {
  const fullUrl = `http://${HOST}:${PORT}${url}`;
  try {
    const response = await fetch(fullUrl);
    return response.json();
  } catch (e) {
    alert(`Can't execute fetch ${fullUrl}, please check API server `);
    return Promise.reject();
  }
};
