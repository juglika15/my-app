import ProductList from './ProductList';
import './ProductCard.css';
import useFetchProducts from '../hooks/useFetchProducts';

export default async function Products({ searchParams }) {
  const currentPage = searchParams['page'] ?? '1';
  const itemsPerPage = searchParams['itemsPerPage'] ?? '15';

  const productsURL = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;
  const { products, totalPages } = await useFetchProducts(
    productsURL,
    itemsPerPage
  );

  return (
    <div>
      <ProductList products={products} totalPages={totalPages} />
    </div>
  );
}
