export interface Food {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface DataRice {
  message: string;
  data: Food[];
}
