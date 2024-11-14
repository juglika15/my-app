import ProductCard from './ProductCard';
import './../components/Content/Content.css';
import './../components/Content/Item.css';
import PaginationControls from './../components/PaginationControls';
import FilterProducts from './../components/FilterProducts';
import AddButton from './../components/Buttons/AddButton';

export default function ProductList({
  products,
  totalPages,
  onDelete,
  setActiveProduct,
  setAddProductActive,
}) {
  return (
    <main className="main dark:bg-orange-300">
      <h2>Item Shop</h2>
      <AddButton name={'Product'} setAddActive={setAddProductActive} />
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
