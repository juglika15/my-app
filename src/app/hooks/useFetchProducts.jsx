async function useFetchProducts(productsURL, itemsPerPage) {
  let products = [];
  let totalPages = 0;

  try {
    const response = await fetch(productsURL);

    if (!response.ok) {
      throw new Error('Failed to fetch products data');
    }

    const data = await response.json();

    totalPages = Math.ceil(data.total / itemsPerPage);
    products = data.products;
  } catch (err) {
    console.error(err);
  }

  return { products, totalPages };
}
export default useFetchProducts;
