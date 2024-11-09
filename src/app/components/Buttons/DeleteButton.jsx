import './DeleteButton.css';

export default function DeleteButton({ id, onDelete }) {
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
