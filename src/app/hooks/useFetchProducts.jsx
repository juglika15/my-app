async function useFetchProducts() {
  let loading = false;
  let products = [];
  let error = null;

  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=51&skip=0`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products data');
    }

    const data = await response.json();
    products = data.products;
  } catch (err) {
    error = err.message;
  }

  return { products, loading, error };
}
export default useFetchProducts;
