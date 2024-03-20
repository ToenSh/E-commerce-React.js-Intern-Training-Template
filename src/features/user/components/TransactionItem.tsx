import { TransactionProduct } from '@/features/transactions/types';
import { useGetOneCategoryQuery } from '@/features/dashboard';

const TransactionItem = ({
  categoryId,
  productId,
  quantity,
}: TransactionProduct) => {
  const { data: category } = useGetOneCategoryQuery(categoryId.toString());
  const productData = category?.products.find(
    (product) => product.id === Number(productId)
  );

  return (
    <div className="flex justify-between border-b border-gray-300 last:border-none pb-2 last:pb-0">
      <div className="flex items-center gap-3">
        <img src={productData?.images[0]} alt="boots" className="w-10" />
        <div className="flex flex-col">
          <p className="font-semibold max-w-56">{productData?.name}</p>
        </div>
      </div>
      <div className="font-semibold text-sm self-center">
        -{productData?.price.toFixed(2)} USD
      </div>
    </div>
  );
};

export default TransactionItem;
