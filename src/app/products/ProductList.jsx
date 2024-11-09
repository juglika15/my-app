import ProductCard from './ProductCard';
import '../components/Content/Content.css';
import '../components/Content/Item/Item.css';
import PaginationControls from '../components/PaginationControls';
import FilterProducts from '../components/FilterProducts';

export default function ProductList({
  products,
  totalPages,
  onDelete,
  setActiveProduct,
}) {
  return (
    <main className="main">
      <h2>Item Shop</h2>
      <FilterProducts />
      <div className="items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={onDelete}
            setActiveProduct={setActiveProduct}
          />
        ))}
      </div>
      <PaginationControls totalPages={totalPages} />
    </main>
  );
}
