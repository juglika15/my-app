import "./Item.css";

export default function Item({ item }) {
  return (
    <div className="item">
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
