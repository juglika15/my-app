import ProductCard from './ProductCard';
import '../components/Content/Content.css';
import '../components/Content/Item/Item.css';
import PaginationControls from '../components/PaginationControls';

export default function ProductList({ products, totalPages }) {
  return (
    <main className="main">
      <h2>Item Shop</h2>
      <div className="items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PaginationControls totalPages={totalPages} />
    </main>
  );
}
