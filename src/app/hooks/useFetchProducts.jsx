async function useFetchProducts(currentPage = 1) {
  let products = [];

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
    console.error(err);
  }

  return { products };
}
export default useFetchProducts;
