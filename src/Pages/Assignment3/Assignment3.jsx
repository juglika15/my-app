const obj = {
  id: "10002",

  name: "Eco-Friendly Water Bottle",

  description: "Stay hydrated with our durable, eco-friendly water bottle.",

  price: 14.99,

  currency: "USD",

  imageURL: "https://example.com/images/product-10002.jpg",
};

export default function Assignment3() {
  return <div className="content">{obj.name}</div>;
}
