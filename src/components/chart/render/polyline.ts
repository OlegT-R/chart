import { PreparedChardDataType } from '../../../types/chart';
import {
  POLYLINE_LINE_COLOR,
  GRID_OFFSET
} from '../../../constants/canvas';
import {
  getWorkHeightWithPixelRatio,
  getWorkWidthWithPixelRatio,
  getXWithPixelRatio,
} from '../utils/common';
import { getPixelOffsetToDate } from '../utils/dates';

export const createPolyline = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  data: PreparedChardDataType,
  from: string,
  to: string,
) => {
  const { data: dotes, max, min } = data;

  const valInterval = Math.abs(max - min);

  // pixel step for 1 value
  const valPixelStep =
    (getWorkHeightWithPixelRatio(canvas) - 2 * GRID_OFFSET) / valInterval;

  // axis width = canvas work width - offset from top and bottom
  const workAxisWidth = getWorkWidthWithPixelRatio(canvas) - 2 * GRID_OFFSET;

  context.restore();
  context.strokeStyle = POLYLINE_LINE_COLOR;
  context.lineWidth = 1;
  context.beginPath();

  for (let i = 0; i < dotes.length; i++) {
    const { t: date, v: value } = dotes[i];
    const valueOffset = value - min;

    // offset in pixel for current date of from date
    const datePixelOffset = getPixelOffsetToDate(from, to, date, workAxisWidth);

    const x =
      getXWithPixelRatio(valPixelStep * valueOffset, canvas) + GRID_OFFSET;
    const y = datePixelOffset + GRID_OFFSET;
    // first point should use moveTo
    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.stroke();
};
