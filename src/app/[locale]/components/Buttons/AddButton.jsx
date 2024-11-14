import './AddButton.css';

export default function AddButton({ name, setAddActive }) {
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
