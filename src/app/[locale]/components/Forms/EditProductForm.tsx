import { ProductType } from '../../types/api';
import './Form.css';

export default function EditProductForm({
  product,
  setProducts,
  setActiveProduct,
}: {
  product: ProductType;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setActiveProduct: React.Dispatch<React.SetStateAction<ProductType | null>>;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!product.title || !product.description) return;
    setProducts((curProducts) =>
      curProducts.map((curProduct) =>
        curProduct.id !== product.id ? curProduct : product
      )
    );
    setActiveProduct(null);
  }

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-button"
          onClick={() => setActiveProduct(null)}
        >
          &times;
        </button>
        <label htmlFor="title" className="label">
          title:
        </label>
        <input
          type="text"
          value={product?.title || ''}
          className="input"
          name="title"
          id="title"
          onChange={(e) =>
            setActiveProduct({ ...product, title: e.target.value })
          }
        />

        <label htmlFor="description" className="label">
          description:
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="input"
          defaultValue={product?.description}
          onChange={(e) =>
            setActiveProduct({ ...product, description: e.target.value })
          }
        />
        <label htmlFor="price" className="label">
          price:
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="input"
          defaultValue={product?.price}
          onChange={(e) =>
            setActiveProduct({ ...product, price: Number(e.target.value) })
          }
        />
        <button
          type="submit"
          className="save-btn"
          disabled={!product?.title || !product?.description}
        >
          save changes
        </button>
      </form>
    </div>
  );
}
