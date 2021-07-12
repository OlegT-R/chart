import { OptionType } from '../../types/select';

export const prepareOptionsMarkup = (options: OptionType[]) =>
  `${options.map(
    option =>
      `<option value="${option.value}" ${option.selected ? 'selected' : ''}>${
        option.title
      }</option>`,
  )}`;

export const markup = (options: OptionType[]) => `
  <select>
        ${prepareOptionsMarkup(options)}
  </select>
`;
