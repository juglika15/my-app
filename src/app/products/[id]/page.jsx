import styles from './productPage.css';

const fetchProduct = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    return res.json();
  };

  export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products?limit=0&skip=0'); // Adjust the URL if needed
    const { products } = await res.json(); // Assuming the API returns an array of products
    return products.map((product) => ({
      id: product.id.toString(), // Ensure id is a string
    }));
  }
  export default async function ProductPage({ params }) {
    const { id } = params; // Get the ID from URL parameters
    const product = await fetchProduct(id); // Fetch product details based on ID
  
    return <div id="productPage"></div>
}