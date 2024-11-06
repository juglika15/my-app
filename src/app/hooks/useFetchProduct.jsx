async function useFetchProduct(id) {
  let product = {};
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    product = await res.json();
  } catch (err) {
    console.error(err);
  }
  return product;
}

export default useFetchProduct;
