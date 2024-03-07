import ProductCard from './components/ProductCard';

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto text-dark-green flex flex-col gap-16">
      <h1 className="font-semibold text-[40px]">Snow</h1>
      <div className="grid grid-cols-4 gap-3 mb-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};
export default Category;
