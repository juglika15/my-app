import './EditButton.css';

export default function EditButton({ item, setActive }) {
  return (
    <button className="edit-btn" onClick={() => setActive(item)}>
      edit
    </button>
  );
}
