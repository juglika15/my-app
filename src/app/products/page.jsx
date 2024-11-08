import ProductList from './ProductList';
import './ProductCard.css';
import useFetchProducts from '../hooks/useFetchProducts';
import { useMemo } from 'react';

export default async function Products({ searchParams }) {
  const currentPage = searchParams['page'] ?? '1';
  const itemsPerPage = searchParams['itemsPerPage'] ?? '15';
  const sortType = searchParams?.sortBy ?? '';
  const [sortByValue, orderValue] = sortType.split('-');
  const searchValue = searchParams['search'] ?? '';

  const productsURL = useMemo(() => {
    let url = `https://dummyjson.com/products/search?q=${searchValue}&limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}&sortBy=${sortByValue}&order=${orderValue}`;
    return url;
  }, [currentPage, itemsPerPage, sortByValue, orderValue]);

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
