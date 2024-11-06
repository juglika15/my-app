async function useFetchProducts(currentPage = 1) {
  let products = [];
  let error = null;

  const itemsPerPage = 15;
  const productsURL = 'https://dummyjson.com/products';

  try {
    const response = await fetch(
      `${productsURL}?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products data');
    }

    const data = await response.json();
    products = data.products;
  } catch (err) {
    error = err.message;
  }

  return { products, error };
}
export default useFetchProducts;
