import { ProductList } from './ProductList';
import './ProductCard.css';
import useFetchProducts from '../hooks/useFetchProducts';

export default async function Products() {
  const { products } = await useFetchProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
