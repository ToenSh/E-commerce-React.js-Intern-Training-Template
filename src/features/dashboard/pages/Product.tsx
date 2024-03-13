import { useAppDispatch } from '@/app/hooks';
import ProductDetails from '../components/ProductDetails';
import { useGetOneCategoryQuery } from '@/features/dashboard/slice/dashboardApiSlice';
import { useParams } from 'react-router-dom';
import { addProduct } from '@/features/cart/slice/cartSlice';
import { useToast } from '@/components/ui/use-toast';
const Product = () => {
  const { toast } = useToast();
  const { categoryID, product: productID } = useParams();
  const { data: category } = useGetOneCategoryQuery(categoryID);
  const dispatch = useAppDispatch();

  const productData = category?.products.find((product) => product.id === Number(productID));

  const renderProductImages = () => {
    return productData?.images.map((imgSrc) => {
      return <img src={imgSrc} alt="product-image" className="w-full " />;
    });
  };

  const addToCart = () => {
    if (productData) {
      dispatch(
        addProduct({
          id: productData.id,
          categoryID: productData.categoryID,
          name: productData.name,
          price: productData.price,
          image: productData.images[0],
          quantity: 1,
        })
      );
      toast({
        title: 'Item added to cart',
      });
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto pt-12 pb-20
    grid grid-cols-[2fr_1fr] gap-x-6 text-dark-green"
    >
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 h-fit">{renderProductImages()}</div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[40px] leading-tight">{productData?.name}</h1>
        <div className="text-lg">{productData?.price.toFixed(2)} USD</div>
        <span className="text-xs tracking-wide">Shipping calculated at checkout.</span>
        <div className="flex flex-col gap-3 my-6">
          <button
            className="bg-transparent py-2 border border-black rounded text-[15px] border-opacity-50 hover:border-opacity-100"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          <button className="bg-purple text-white font-bold text-sm py-3 rounded hover:opacity-75">Buy Now</button>
        </div>
        <p className=" tracking-wider leading-7 opacity-80">{productData?.description}</p>
        <ProductDetails />
      </div>
    </section>
  );
};

export default Product;
