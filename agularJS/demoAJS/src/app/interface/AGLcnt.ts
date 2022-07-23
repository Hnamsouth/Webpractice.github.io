export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface IScnt {
  message: string;
  data: Datum[];
}
