import { useParams } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import {
  useGetOneCategoryQuery,
  useGetCategoriesQuery,
} from '@/features/api/apiSlice';
const Category = () => {
  const { categoryID } = useParams();

  const { data: categories } = useGetCategoriesQuery();
  const { data: category } = useGetOneCategoryQuery(categoryID, {
    skip: categoryID === 'allProducts',
  });

  const getProducts = () => {
    if (categoryID === 'allProducts') {
      return categories?.flatMap((category) => category.products);
    } else {
      return category?.products;
    }
  };

  const renderProductCards = () => {
    return getProducts()?.map((product) => {
      return (
        <ProductCard
          key={product.id}
          productID={product.id}
          categoryID={product.categoryID}
          name={product.name}
          price={product.price}
          image={product.images[0]}
        />
      );
    });
  };
  return (
    <section className="max-w-7xl mx-auto text-dark-green flex flex-col gap-16 pt-8">
      <h1 className="font-semibold text-[40px] capitalize">
        {categoryID === 'allProducts' ? 'All Products' : category?.name}
      </h1>
      <div className="grid grid-cols-4 gap-y-8 gap-x-3 mb-16">
        {renderProductCards()}
      </div>
    </section>
  );
};
export default Category;
