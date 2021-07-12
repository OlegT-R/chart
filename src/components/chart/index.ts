import { CHART_WIDTH_HEIGHT_ASPECT_RATIO } from '../../constants/canvas';
import { getPixelRatio } from './utils/common';
import { chartConnectHoc } from './connect';
import style from './style';
import { createChartGrid } from './render/grid';

import { IBaseComponent } from '../../types/component';
import { PreparedChardDataType } from '../../types/chart';

export type ChartPropsType = {
  data: Promise<PreparedChardDataType>;
  from: string;
  to: string;
};

const initChart = (
  canvas: HTMLCanvasElement,
  container: HTMLElement,
  from: string,
  to: string,
  data: Promise<PreparedChardDataType>,
) => {
  const dpr = getPixelRatio();
  const width = container.offsetWidth;
  const height = width / CHART_WIDTH_HEIGHT_ASPECT_RATIO;
  container.style.cssText = `max-width: ${width}px; max-height: ${height}px;`;

  canvas.width = width * dpr;
  canvas.height = Math.round(height) * dpr;

  const ctx = canvas.getContext('2d');
  if (ctx) {
    // scale to device pixel ratio
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(0, canvas.height);
    ctx.rotate(-Math.PI / 2);

    // adding simple loading
    ctx.save();
    ctx.rotate(Math.PI / 2);
    ctx.font = '16px serif';
    ctx.fillText(
      'Loading... (fetch and save data to IndexedDb)',
      350,
      -canvas.height + 50,
    );
    ctx.restore();
    data.then(prepared => {
      // should change height and width after rotate to Math.PI / 2
      ctx.clearRect(0, 0, canvas.height, canvas.width);
      createChartGrid(canvas, ctx, prepared, from, to);
    });
  }
};

const LineChart = ({
  from,
  to,
  data,
}: ChartPropsType): IBaseComponent<ChartPropsType> => {
  const html = document.createElement('div');
  html.id = 'line-chart__block';

  const canvas = document.createElement('canvas');
  canvas.id = 'line-chart';

  html.appendChild(canvas);

  // TODO: maybe add resize event?
  window.addEventListener('load', () => {
   initChart(canvas, html, from, to, data);
  });

  const update = ({ from, to, data }: ChartPropsType) => {
    initChart(canvas, html, from, to, data);
  };

  return {
    html,
    style: [style],
    update,
  };
};

export default chartConnectHoc(LineChart);
