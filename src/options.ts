export type DataCards = { 
  name: string;
  num: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export type DataFilters = {
  [key: string]: number | boolean;
  ball: boolean;
  bell: boolean;
  pinecone: boolean;
  snowflake: boolean;
  figure: boolean;
  white: boolean;
  yellow: boolean;
  red: boolean;
  blue: boolean;
  green: boolean;
  big: boolean;
  medium: boolean;
  small: boolean;
  favorite: boolean;
  countStart: number;
  countEnd: number;
  yearStart: number;
  yearEnd: number;
};

export interface OnePage {
  button: HTMLElement;
  page: HTMLElement;
}

export interface AllPages {
  home: OnePage;
  toys: OnePage;
  tree: OnePage;
}
