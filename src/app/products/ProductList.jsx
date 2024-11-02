import { ProductCard } from './ProductCard';
import '../components/Content/Content.css';
import '../components/Content/Item/Item.css';

export const ProductList = (props) => {
  return (
    <main className="main">
      <h2>Item Shop</h2>
      <div className="items">
        {props.productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
