export type TCategory = {
    id: number;
    name: string;
    products: TProduct[];
  };
  
  export type TProduct = {
    id: number;
    categoryID: number;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
  