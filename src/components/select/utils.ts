import { OptionType } from '../../types/select';

export const getOptions = (
  from: number,
  to: number,
  selected: number,
): OptionType[] => {
  const options = [];
  for (let year = from; year <= to; year++) {
    const option: OptionType = { value: year, title: `${year}` };
    if (year === selected) {
      option.selected = true;
    }

    options.push(option);
  }
  return options;
};
