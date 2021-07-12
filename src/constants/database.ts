import { EChartTypes } from '../types/chart';

export const INDEXED_DB_NAME = 'statistics';
export const INDEXED_DB_VERSION = 1;

export const STATISTIC_DB_TABLES_SCHEMA = [
  {
    name: EChartTypes.PRECIPITATION,
    key: 't',
  },
  { name: EChartTypes.TEMPERATURE, key: 't' },
];
