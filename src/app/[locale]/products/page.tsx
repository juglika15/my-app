'use client';

import ProductList from './ProductList';
import './ProductCard.css';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import EditProductForm from '../components/Forms/EditProductForm';
import AddProductForm from '../components/Forms/AddProductsForm';
import { ProductType } from '../../../types/api';

export default function Products() {
  const searchParams = useSearchParams();

  // const currentPage = searchParams['page'] ?? '1';
  // const itemsPerPage = searchParams['itemsPerPage'] ?? '15';
  // const sortType = searchParams?.sortBy ?? '';
  // const [sortByValue, orderValue] = sortType.split('-');
  // const searchValue = searchParams['search'] ?? '';

  const currentPage: string = searchParams.get('page') ?? '1';
  const itemsPerPage: string = searchParams.get('itemsPerPage') ?? '15';
  const sortType: string = searchParams.get('sortBy') ?? '';
  const [sortByValue, orderValue]: string[] = sortType.split('-');
  const searchValue: string = searchParams.get('search') ?? '';

  const productsURL = useMemo(() => {
    let url = `https://dummyjson.com/products/search?q=${searchValue}&limit=${itemsPerPage}&skip=${(Number(currentPage) - 1) * Number(itemsPerPage)}&sortBy=${sortByValue}&order=${orderValue}`;
    return url;
  }, [currentPage, itemsPerPage, sortByValue, orderValue, searchValue]);

  const [products, setProducts] = useState<ProductType[] | []>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);
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

  function handleDelete(id: number) {
    setProducts((curProducts) =>
      curProducts.filter((product: ProductType) => product.id !== id)
    );
  }

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
