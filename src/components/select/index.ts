import { markup, prepareOptionsMarkup } from './markup';
import style from './style';
import { getOptions } from './utils';
import { selectConnectHoc } from './connect';

import { ESelectTypes } from '../../types/select';
import { IBaseComponent } from '../../types/component';

export type SelectOuterPropsType = {
  name: ESelectTypes;
};

export type SelectConnectPropsType = {
  value: number;
  from?: number;
  to?: number;
  onChange: (name: ESelectTypes, value: number) => void;
};

export type SelectPropsType = SelectOuterPropsType & SelectConnectPropsType;

const Select = ({
  name,
  value,
  from = 1881,
  to = 2006,
  onChange,
}: SelectPropsType): IBaseComponent<SelectPropsType> => {
  const options = getOptions(from, to, value);

  const html = document.createElement('div');
  html.id = `select#${name}`;
  html.classList.add('select');
  html.innerHTML = markup(options);

  // getting select elements
  const select = html.querySelector('select');

  // subscribe to click on select option
  if (select) {
    select.addEventListener('change', event => {
      // @ts-ignore
      onChange(name, +event.target.value);
    });
  }

  // updating props cb
  const update = ({ from = 0 }: SelectPropsType) => {
    const select = html.querySelector('select');
    if (select) {
      // update select options
      const selected = from > +select.value ? from : +select.value;
      const options = getOptions(from, to, selected);
      select.innerHTML = prepareOptionsMarkup(options);
    }
  };

  return {
    html,
    style: [style],
    update,
  };
};

export default selectConnectHoc(Select);
