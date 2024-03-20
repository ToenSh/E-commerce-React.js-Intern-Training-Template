export type TransactionType = {
  id: number;
  bankAccountId: number;
  amount: number;
  products: TransactionProduct[];
  dateCreated: string;
};

export type TransactionProduct = {
  productId: number;
  categoryId: number;
  quantity: number;
};
