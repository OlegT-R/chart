import { PreparedChardDataType } from '../../../types/chart';
import {
  AXIS_FONT,
  AXIS_FONT_SIZE,
  GRID_LINE_COLOR,
  GRID_OFFSET,
  MAX_X_RENDER_VALUES_COUNT,
} from '../../../constants/canvas';
import {
  getWorkHeightWithPixelRatio,
  getXWithPixelRatio,
} from '../utils/common';

export const createXAxis = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  data: PreparedChardDataType,
) => {
  context.fillStyle = GRID_LINE_COLOR;
  context.lineWidth = 1;
  // append offset for axis line (in top and bottom)
  const gutterOffset = GRID_OFFSET / 3;
  const fontOffset = AXIS_FONT_SIZE / 3;

  const valInterval = Math.abs(data.max - data.min);
  const valueStep = valInterval / MAX_X_RENDER_VALUES_COUNT;

  // axis height = canvas work height - offset from top and bottom
  const pixelStep =
    (getWorkHeightWithPixelRatio(canvas) - 2 * GRID_OFFSET) /
    MAX_X_RENDER_VALUES_COUNT;

  // creating Axis line
  context.beginPath();
  context.moveTo(
    getXWithPixelRatio(GRID_OFFSET - gutterOffset, canvas),
    GRID_OFFSET,
  );
  context.lineTo(canvas.height - GRID_OFFSET + gutterOffset, GRID_OFFSET);
  context.stroke();

  // creating text values and tiny line
  for (let i = 0; i <= MAX_X_RENDER_VALUES_COUNT; i++) {
    context.save();
    context.translate(
      getXWithPixelRatio(GRID_OFFSET + pixelStep * i - fontOffset, canvas),
      0,
    );
    context.rotate(Math.PI / 2);
    const text = `${Math.ceil(data.min + valueStep * i)}`;
    context.font = `${AXIS_FONT_SIZE}px ${AXIS_FONT}`;
    context.fillText(text, 0, 0);
    context.restore();
    context.beginPath();
    context.moveTo(
      getXWithPixelRatio(GRID_OFFSET + pixelStep * i, canvas),
      GRID_OFFSET,
    );
    context.lineTo(getXWithPixelRatio(GRID_OFFSET + pixelStep * i, canvas), 25);
    context.stroke();
  }
};
