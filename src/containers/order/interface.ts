export interface Item {
  name: string;
  content: string;
  id: number;
}

export interface Result {
  total: number;
  list: Item[];
}

