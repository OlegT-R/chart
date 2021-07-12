/* eslint-disable */

import { getMonthDiff, getPixelOffsetToDate, getDateText, getAxisDateLabels } from './dates';
import { MAX_RENDER_LABELS_COUNT } from "../../../constants/canvas";

describe('chart dates utils test', () => {
  test('monthDiff test', () => {
    // same year
    const fromDate = new Date('2020.01.22');
    const toDate = new Date('2020.05.22');
    const diff = getMonthDiff(fromDate, toDate);
    expect(diff).toEqual(4);

    // diff year
    const startDate = new Date('2020.01.22');
    const endDate = new Date('2021.06.22');
    const diffWithYear = getMonthDiff(startDate, endDate);
    expect(diffWithYear).toEqual(17);
  });

  test('getPixelOffsetToMonth test', () => {
    // one year
    const canvasAxisWorkWidth = 1200;
    const pixelOffset = getPixelOffsetToDate(
      '2020.01.22',
      '2020.12.15',
      '2020.07.22',
      canvasAxisWorkWidth,
    );
    expect(pixelOffset).toEqual(666);

    // four years
    const pixel4Offset = getPixelOffsetToDate(
      '2020.01.22',
      '2024.12.15',
      '2021.07.22',
      canvasAxisWorkWidth,
    );
    expect(pixel4Offset).toEqual(367);
  });

  test('getDateText should return correct text', () => {
    const textFullMonth = getDateText('2020.02.22', '2020.01.01', '2020.12.01');
    expect(textFullMonth).toEqual('February');

    const textMonthWithYear = getDateText('2020.02.22', '2018.01.01', '2021.12.01');
    expect(textMonthWithYear).toEqual('Feb 2020');

    const textOnlyYearYear = getDateText('2020.02.22', '2009.01.01', '2021.12.01');
    expect(textOnlyYearYear).toEqual('2020');
  });

  test('getAxisDateLabels should return correct labels', () => {
    const labels1Year = getAxisDateLabels('2020.01.01', '2020.12.01');
    // [Jan 2020, Feb 2020 ... Dec 2020]
    labels1Year.map((date, index) => {
      const year = date.getFullYear();
      const month = date.getMonth()
      expect(year).toEqual(2020);
      expect(month).toEqual(index)
    })

    const moreThen1Year= getAxisDateLabels('2010.01.01', '2020.12.01');
    expect(moreThen1Year.length).toEqual(MAX_RENDER_LABELS_COUNT)
  });

});
