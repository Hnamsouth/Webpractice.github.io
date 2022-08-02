export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Food1 {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface Data {
  category: Category;
  foods: Food1[];
}

export interface IScnt2 {
  message: string;
  data: Data;
}
