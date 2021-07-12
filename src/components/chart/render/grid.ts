import { PreparedChardDataType } from '../../../types/chart';
import { createPolyline } from './polyline';
import { createYAxis } from './yAxis';
import { createXAxis } from './xAxis';

export const createChartGrid = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  data: PreparedChardDataType,
  from: string,
  to: string,
) => {
  createXAxis(canvas, context, data);
  createYAxis(canvas, context, data, from, to);
  createPolyline(canvas, context, data, from, to);
};
