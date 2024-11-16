import './AddButton.css';

export default function AddButton({
  name,
  setAddActive,
}: {
  name: 'Post' | 'Product';
  setAddActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="add-btn"
      onClick={() => {
        setAddActive(true);
      }}
    >
      add new {name}
    </button>
  );
}
