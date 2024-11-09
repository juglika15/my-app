import './ProductCard.css';
import Link from 'next/link';
import DeleteButton from '../components/Buttons/DeleteButton';
import EditButton from '../components/Buttons/EditButton';

export default function ProductCard({ product, onDelete, setActiveProduct }) {
  return (
    <div className="item">
      <div
        style={{
          height: 120,
        }}
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="item-img"
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </div>
      <h4 className="item-name">{product.title}</h4>
      <div>${product.price}</div>
      <p className="item-desc">{product.description}</p>
      <div>
        {/* <button className="button">Add to Cart</button> */}
        <Link href={`/products/${product.id}`} className="moreCardBtn">
          details
        </Link>
        <EditButton item={product} setActive={setActiveProduct} />
        <DeleteButton id={product.id} onDelete={onDelete} />
      </div>
    </div>
  );
}
