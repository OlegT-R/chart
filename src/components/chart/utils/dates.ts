import { monthNames, fullMonthNames } from '../../../constants/dates';
import { MAX_RENDER_LABELS_COUNT } from "../../../constants/canvas";

const getDiffInMonth = (from: Date, to: Date): number => {
  const fromYear = from.getFullYear();
  const toYear = to.getFullYear();
  const diffYearCount = toYear - fromYear + 1;
  return diffYearCount * 12;
};

const getDiffInDays = (from: Date, to: Date): number => {
  // @ts-ignore
  const diffTime = Math.abs(to - from);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const generateMonthWithYearLabels = (from: Date, to: Date) => {
  const diffMonthCount = getDiffInMonth(from, to);
  const labels = [];
  // month step
  const squashRatio = Math.ceil(diffMonthCount / MAX_RENDER_LABELS_COUNT);
  // prepare to event value
  const eventSquashRatio = squashRatio % 2 === 0 ? squashRatio : squashRatio + 1;
  for (let i = 0; i <= diffMonthCount; i = i + eventSquashRatio) {
    const offsetDate = new Date(from);
    offsetDate.setMonth(from.getMonth() + i);
    labels.push(offsetDate);
  }
  return labels;
};

export const getAxisDateLabels = (from: string, to: string): Date[] => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const diffMonthCount = getDiffInMonth(fromDate, toDate);
  // rendering only month name
  if (diffMonthCount <= MAX_RENDER_LABELS_COUNT) {
    const year = fromDate.getFullYear();
    return monthNames.map(
      (month: string) => new Date(`${year}-${month}-01 00:00`),
    );
  }
  // rendering month + year labels with squash
  return generateMonthWithYearLabels(fromDate, toDate);
};

export const getDateText = (date: string | Date, from: string, to: string) => {
  const jsDate = new Date(date);
  const year = String(jsDate.getFullYear());
  const month = monthNames[jsDate.getMonth()];
  const fullMonth = fullMonthNames[jsDate.getMonth()];

  const fromDate = new Date(from);
  const toDate = new Date(to);
  const diffMonthCount = getDiffInMonth(fromDate, toDate);

  // 1 year -> showing only month
  if (diffMonthCount <= MAX_RENDER_LABELS_COUNT) {
    return fullMonth;
  }

  // 12 year -> show month + year
  if (diffMonthCount <= 12 * MAX_RENDER_LABELS_COUNT) {
    return `${month} ${year}`;
  }

  return year;
};

export const getMonthDiff = (dateFrom: Date, dateTo: Date): number =>
  dateTo.getMonth() -
  dateFrom.getMonth() +
  12 * (dateTo.getFullYear() - dateFrom.getFullYear());

export const getPixelOffsetToDate = (
  from: string | Date,
  to: string | Date,
  date: string | Date,
  workWidth: number,
) => {
  const fromDate = new Date(`${from} 00:00`);
  const toDate = new Date(to);
  const checkedDate = new Date(date);
  const diffInDays = getDiffInDays(fromDate, toDate);
  const dayPixelStep = workWidth / diffInDays;
  return Math.round(getDiffInDays(fromDate, checkedDate) * dayPixelStep);
};

export const prepareFromDate = (fromYear: string | number) =>
  `${fromYear}-01-01`;

export const prepareToDate = (toYear: string | number) => `${toYear}-12-31`;
