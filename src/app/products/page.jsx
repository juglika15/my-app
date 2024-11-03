import { ProductList } from './ProductList';
import './ProductCard.css';
import Spinner from '../spinner/spinner';
import useFetchProducts from '../hooks/useFetchProducts';

export default async function Products() {
  const { products, loading } = await useFetchProducts();

  return (
    <div>
      {loading ? (
        <div className="main">
          <span>Loading...</span>
          <Spinner />
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
