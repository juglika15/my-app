import styles from './productPage.css';
import Link from 'next/link';
import ImageSlider from '../../utils/imageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const fetchProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};
const renderStars = (rating) => {
  const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
  const fullStars = Math.floor(roundedRating); // Get the full star count
  const hasHalfStar = roundedRating - fullStars === 0.5; // Check if there's a half star
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfAlt} />);
  }
  return stars;
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

  return (
    <div id="productPage">
      <div className="heading">
        <h1 className="productTitle">{product.title}</h1>
        <div className="stars">{renderStars(product.rating)}</div>
      </div>
      <div className="grouping">
        <Link href={`/categories/${product.category}`} className="category">
          {product.category}
        </Link>
        <div className="tags">
          {product.tags.map((tag, index) => (
            <Link key={index} href={`/tags/${tag}`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
