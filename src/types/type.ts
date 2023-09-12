export interface DataItem {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface DataType {
  type: string;
  version: number;
  response: {
    [key: string]: DataItem;
  };
}
