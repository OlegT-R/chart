export type OptionType = {
  value: string | number,
  title: string,
  disabled?: boolean,
  selected?: boolean
}

export enum ESelectTypes {
  FROM_DATE = 'from',
  TO_DATE = 'to',
}
