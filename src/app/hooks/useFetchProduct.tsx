import { ProductType } from '../[locale]/types/api';

async function useFetchProduct(id: string): Promise<ProductType | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    const product = await res.json();
    return product;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default useFetchProduct;
