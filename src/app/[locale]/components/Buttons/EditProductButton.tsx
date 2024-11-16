import { ProductType } from '../../types/api';
import './EditButton.css';

export default function EditProductButton({
  product,
  setActive,
}: {
  product: ProductType;
  setActive: React.Dispatch<React.SetStateAction<ProductType | null>>;
}) {
  return (
    <button className="edit-btn" onClick={() => setActive(product)}>
      edit
    </button>
  );
}
