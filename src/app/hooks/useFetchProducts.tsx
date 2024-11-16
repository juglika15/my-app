import { ProductType } from '../[locale]/types/api';

async function useFetchProducts(productsURL: string, itemsPerPage: number) {
  let products: ProductType[] = [];
  let totalPages = 0;

  try {
    const response = await fetch(productsURL);

    if (!response.ok) {
      throw new Error('Failed to fetch products data');
    }

    const data = await response.json();

    totalPages = Math.ceil(data.total / itemsPerPage) || 1;
    products = data.products;
  } catch (err) {
    console.error(err);
  }

  return { products, totalPages };
}
export default useFetchProducts;
