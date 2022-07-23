export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface IScategory {
  message: string;
  data: Datum[];
}
