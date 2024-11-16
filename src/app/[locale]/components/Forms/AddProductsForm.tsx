import { useState } from 'react';
import './Form.css';
import { ProductType } from '../../types/api';

export default function AddProductForm({
  setProducts,
  setAddProductActive,
}: {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setAddProductActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: Date.now(),
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
    tags: [],
    warrantyInformation: '',
    shippingInformation: '',
    minimumOrderQuantity: 0,
    returnPolicy: '',
    dimensions: { width: 0, height: 0, depth: 0 },
    weight: 0,
    sku: '',
    reviews: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.description || !newProduct.images[0])
      return;
    setProducts((curProducts) => [newProduct, ...curProducts]);
    setAddProductActive(false);
  };

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-button"
          onClick={() => setAddProductActive(false)}
        >
          &times;
        </button>
        <label htmlFor="title" className="label">
          title:
        </label>
        <input
          type="text"
          value={newProduct?.title || ''}
          className="input"
          name="title"
          id="title"
          onChange={(e) =>
            setNewProduct((product) => {
              return { ...product, title: e.target.value };
            })
          }
        />

        <label htmlFor="description" className="label">
          description:
        </label>
        <input
          type="text"
          name="body"
          id="description"
          className="input"
          defaultValue={newProduct?.description || ''}
          onChange={(e) =>
            setNewProduct((product) => {
              return { ...product, description: e.target.value };
            })
          }
        />

        <label htmlFor="image" className="label">
          image url:
        </label>
        <input
          type="url"
          name="image"
          id="image"
          className="input"
          defaultValue={newProduct?.images[0] || ''}
          onChange={(e) =>
            setNewProduct((product) => {
              return { ...product, images: [e.target.value] };
            })
          }
        />
        <button
          type="submit"
          className="save-btn"
          disabled={
            !newProduct.title ||
            !newProduct.description ||
            !newProduct.images[0]
          }
        >
          save
        </button>
      </form>
    </div>
  );
}
