import "./Content.css";
import Item from "./Item/Item";
import boxOfPainImg from "../assets/images/dune-boxofpain.jpg";
import crysknifeImg from "../assets/images/dune-crysknife.jpg";
import gogglesImg from "../assets/images/dune-goggles.jpg";
import maskImg from "../assets/images/dune-mask.jpg";
import ringImg from "../assets/images/dune-ring.jpg";
import shieldImg from "../assets/images/dune-shield.jpg";
import spiceImg from "../assets/images/dune-spice.jpg";
import stillsuitImg from "../assets/images/dune-stillsuit.jpg";
import thumperImg from "../assets/images/dune-thumper.jpg";

const items = [
  {
    name: "Box of Pain",
    description: "Important tool for Bene Gesserit to test human character",
    img: boxOfPainImg,
  },
  {
    name: "Crysknife",
    description: "Made from a Sandworms tooth, as sharp as a steel blade",
    img: crysknifeImg,
  },
  {
    name: "Stillsuit",
    description: "Vital for surviving deserts of Arrakis",
    img: stillsuitImg,
  },
  {
    name: "Goggles",
    description: "To see in deset sun and in desert sand",
    img: gogglesImg,
  },
  {
    name: "Spice Melange",
    description: "The most important substance in the universe",
    img: spiceImg,
  },
  {
    name: "Paul Atreides's Ring",
    description: "The Ring of the Duke of Hause Atreides",
    img: ringImg,
  },
  {
    name: "Shield",
    description: "Necessary In every close combat",
    img: shieldImg,
  },
  {
    name: "Thumper",
    description: "Used to summen Sandworms",
    img: thumperImg,
  },
  {
    name: "Fremen Mask",
    description: "For daily use in desert",
    img: maskImg,
  },
];

function Content() {
  return (
    <main className="content">
      <h2>Item Shop</h2>
      <div className="items">
        {items.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </div>
    </main>
  );
}

export default Content;