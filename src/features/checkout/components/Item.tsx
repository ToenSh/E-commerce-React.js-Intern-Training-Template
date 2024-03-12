import productImage from '../../../assets/all-weather-boots.png';

const Item = () => {
  return (
    <div className="flex items-center last:border-b border-gray-300 last:pb-4">
      <div className="relative">
        <img src={productImage} alt="product image" className="w-12" />
        <div className="absolute -top-2 -right-2 bg-dark-green text-white rounded-full text-xs font-semibold px-[7px] py-[1px]">1</div>
      </div>
      <p className="ml-3 font-semibold text-sm">Product Name</p>
      <div className="ml-auto font-semibold">253.00 USD</div>
    </div>
  );
};
export default Item;
