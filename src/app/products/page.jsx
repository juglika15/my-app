'use client';
import ProductList from './ProductList';
import './ProductCard.css';
import useFetchProducts from '../hooks/useFetchProducts';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import EditProductForm from '../components/Forms/EditProductForm';
import AddProductForm from '../components/Forms/AddProductsForm';

export default function Products() {
  const searchParams = useSearchParams();

  // const currentPage = searchParams['page'] ?? '1';
  // const itemsPerPage = searchParams['itemsPerPage'] ?? '15';
  // const sortType = searchParams?.sortBy ?? '';
  // const [sortByValue, orderValue] = sortType.split('-');
  // const searchValue = searchParams['search'] ?? '';

  const currentPage = searchParams.get('page') ?? '1';
  const itemsPerPage = searchParams.get('itemsPerPage') ?? '15';
  const sortType = searchParams.get('sortBy') ?? '';
  const [sortByValue, orderValue] = sortType.split('-');
  const searchValue = searchParams.get('search') ?? '';

  const productsURL = useMemo(() => {
    let url = `https://dummyjson.com/products/search?q=${searchValue}&limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}&sortBy=${sortByValue}&order=${orderValue}`;
    return url;
  }, [currentPage, itemsPerPage, sortByValue, orderValue, searchValue]);

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const [addProductActive, setAddProductActive] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products, totalPages } = await useFetchProducts(
        productsURL,
        itemsPerPage
      );
      setProducts(products);
      setTotalPages(totalPages);
    };

    fetchProducts();
  }, [productsURL, itemsPerPage]);

  function handleDelete(id) {
    setProducts((curProducts) =>
      curProducts.filter((product) => product.id !== id)
    );
  }
  console.log(products[0]);
  return (
    <div>
      <ProductList
        products={products}
        totalPages={totalPages}
        onDelete={handleDelete}
        setActiveProduct={setActiveProduct}
        setAddProductActive={setAddProductActive}
      />
      {addProductActive && (
        <AddProductForm
          setProducts={setProducts}
          setAddProductActive={setAddProductActive}
        />
      )}
      {activeProduct && (
        <EditProductForm
          product={activeProduct}
          setProducts={setProducts}
          setActiveProduct={setActiveProduct}
        />
      )}
    </div>
  );
}
