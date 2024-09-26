import "./Content.css";
import Item from "./Item/Item";
import dune1Img from "../assets/images/dune1.jpg";
import dune2Img from "../assets/images/dune2.jpg";
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
    prince: "100 Solaris",
    img: boxOfPainImg,
  },
  {
    name: "Crysknife",
    description: "Made from a Sandworms tooth, sharp as a steel blade",
    prince: "50 Solaris",
    img: crysknifeImg,
  },
  {
    name: "Stillsuit",
    description: "Vital for surviving deserts of Arrakis",
    prince: "250 Solaris",
    img: stillsuitImg,
  },
  {
    name: "Goggles",
    description: "To see in deset sun and in desert sand",
    prince: "30 Solaris",
    img: gogglesImg,
  },
  {
    name: "Spice Melange",
    description: "The most important substance in the universe",
    prince: "10 000 Solaris",
    img: spiceImg,
  },
  {
    name: "Paul Atreides's Ring",
    description: "The Ring of the Duke of Hause Atreides",
    prince: "1000 Solaris",
    img: ringImg,
  },
  {
    name: "Shield",
    description: "Necessary In every close combat",
    prince: "500 Solaris",
    img: shieldImg,
  },
  {
    name: "Thumper",
    description: "Used to summen Sandworms",
    prince: "35 Solaris",
    img: thumperImg,
  },
  {
    name: "Fremen Mask",
    description: "For daily use in desert",
    prince: "40 Solaris",
    img: maskImg,
  },
];

function Content() {
  return (
    <main className="content">
      <div className="movie">
        <img src={dune1Img} alt="Dune 1" />
        <div>
          <h2>Dune: Part One</h2>
          <p className="description">
            A mythic and emotionally charged hero's journey, "Dune" tells the
            story of Paul Atreides, a brilliant and gifted young man born into a
            great destiny beyond his understanding, who must travel to the most
            dangerous planet in the universe to ensure the future of his family
            and his people.{" "}
          </p>
        </div>
      </div>
      <div className="movie">
        <img src={dune2Img} alt="Dune 2" />
        <div>
          <h2>Dune: Part Two</h2>
          <p className="description">
            Paul Atreides unites with Chani and the Fremen while on a warpath of
            revenge against the conspirators who destroyed his family. Facing a
            choice between the love of his life and the fate of the known
            universe, he endeavors to prevent a terrible future only he can
            foresee.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content;
