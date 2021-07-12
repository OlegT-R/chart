import { PreparedChardDataType } from '../../../types/chart';
import {
  AXIS_FONT,
  AXIS_FONT_SIZE,
  GRID_LINE_COLOR,
  GRID_OFFSET,
} from '../../../constants/canvas';
import {
  getAxisDateLabels,
  getDateText,
  getPixelOffsetToDate,
} from '../utils/dates';
import {
  getWorkWidthWithPixelRatio,
  getXWithPixelRatio,
} from '../utils/common';

export const createYAxis = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  data: PreparedChardDataType,
  from: string,
  to: string,
) => {
  context.fillStyle = GRID_LINE_COLOR;
  context.lineWidth = 1;

  // appending offset for axis line (in top and bottom)
  const gutterOffset = GRID_OFFSET / 3;
  const fontOffset = 2 * AXIS_FONT_SIZE;

  // getting dates labels
  const labels = getAxisDateLabels(from, to);

  // axis width = canvas work width - offset from top and bottom
  const workAxisWidth = getWorkWidthWithPixelRatio(canvas) - 2 * GRID_OFFSET;

  // creating Axis line
  context.beginPath();
  context.moveTo(
    getXWithPixelRatio(GRID_OFFSET, canvas),
    GRID_OFFSET - gutterOffset,
  );
  context.lineTo(
    getXWithPixelRatio(GRID_OFFSET, canvas),
    getWorkWidthWithPixelRatio(canvas) - GRID_OFFSET + gutterOffset,
  );
  context.stroke();

  // creating text values and tiny line
  for (let i = 0; i < labels.length; i++) {
    const text = getDateText(labels[i], from, to);
    const datePixelOffset = getPixelOffsetToDate(
      from,
      to,
      labels[i],
      workAxisWidth,
    );

    // offset to label center
    const leftInnerTextOffset = text.length * 3;
    context.save();
    context.translate(
      getXWithPixelRatio(GRID_OFFSET - fontOffset, canvas),
      GRID_OFFSET - leftInnerTextOffset + datePixelOffset,
    );
    context.rotate(Math.PI / 2);
    context.font = `${AXIS_FONT_SIZE}px ${AXIS_FONT}`;
    context.fillText(text, 0, 0);
    context.restore();
    //create tiny line
    context.beginPath();
    context.moveTo(
      getXWithPixelRatio(GRID_OFFSET, canvas),
      GRID_OFFSET + datePixelOffset,
    );
    context.lineTo(
      getXWithPixelRatio(25, canvas),
      GRID_OFFSET + datePixelOffset,
    );
    context.stroke();
  }
};
