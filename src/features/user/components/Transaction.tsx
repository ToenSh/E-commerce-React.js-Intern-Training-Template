import { TransactionType } from '@/features/transactions/types';
import TransactionItem from './TransactionItem';
import { formatDate } from '@/utils/formatDate';
import { useState } from 'react';

const Transaction = ({ amount, products, dateCreated }: TransactionType) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const renderTransactionItems = () => {
    return products
      .slice(1)
      .map((product) => (
        <TransactionItem
          key={product.productId}
          productId={product.productId}
          categoryId={product.categoryId}
          quantity={product.quantity}
        />
      ));
  };

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <div
      className={`flex flex-col gap-2 w-full border border-gray-300 px-3 py-4 rounded-lg hover:shadow-md cursor-pointer transition-all duration-300 ease-in`}
      onClick={toggleShowAllItems}
    >
      <TransactionItem
        key={products[0].productId}
        productId={products[0].productId}
        categoryId={products[0].categoryId}
        quantity={products[0].quantity}
      />
      {showAllItems && renderTransactionItems()}
      <div className="flex justify-between items-center">
        <span className="text-sm opacity-80">{formatDate(dateCreated)}</span>
        <span className="font-bold">{amount.toFixed(2)} USD</span>
      </div>
    </div>
  );
};

export default Transaction;
