import './DeleteButton.css';

export default function DeleteButton({
  id,
  onDelete,
}: {
  id: number;
  onDelete: (id: number) => void;
}) {
  return (
    <button
      className="delete-btn"
      onClick={() => {
        onDelete(id);
      }}
    >
      delete
    </button>
  );
}
