import "./BlogList.css";
import Blog from "./Blog/Blog";

const blogs = [
  {
    id: "0101",
    title:
      "A word of praise for Dune by Frank Herbert, a book every human should strive to read",
    preview:
      "Dune is a book which, despite its fabulous length, I devoured pretty quickly, completely fascinated by how the marvelous Universe trapped between the pages was unfolding before my eyes, capturing my heart and luring me inside deeper and deeper, like a toxic lover you can’t say “no” to.",
    author: "oxietamine",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*3tsb2K7N5UR_9hkeSh_heQ.jpeg",
    blogUrl:
      "https://medium.com/@foxietamine/a-word-of-praise-for-dune-by-frank-herbert-a-book-every-human-should-strive-to-read-b6ff87b56d44",
  },
  {
    id: "0102",
    title: "Dune: Part Two",
    preview:
      "When the first part of Denis Villeneuve’s Dune adaptation came out two and a half years ago I was glad to admit to being apathetic about seeing it—I had read the book and enjoyed it but wasn’t blown away by it.",
    author: "Jordan Poss",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5a0a45cdbce176b25421b468/b72181b6-35ab-49a2-9877-eb23697eae3a/dune+part+two+sandworms.jpg?format=2500w",
    blogUrl: "https://www.jordanmposs.com/blog/2024/3/5/dune-part-two",
  },
  {
    id: "0103",
    title: "The Fremen Mirage, Part I: War at the Dawn of Civilization",
    preview:
      "This week’s post is the first in a four part series (II, IIIa, IIIb, interlude, IV) looking at what I’m going to term the Fremen Mirage (a play on Le Mirage Spartiate, which we’ve already discussed in some detail), a term I’m creating to encompass a set of related pop-history theories which are flourish, evergreen despite not, perhaps, holding up so well under close examination.",
    author: "Bret Devereaux",
    imageUrl:
      "https://i0.wp.com/acoup.blog/wp-content/uploads/2020/01/fremen-attack.png?resize=1100%2C585&ssl=1",
    blogUrl:
      "https://acoup.blog/2020/01/17/collections-the-fremen-mirage-part-i-war-at-the-dawn-of-civilization/",
  },
];

export default function BlogList() {
  return (
    <main className="main">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </main>
  );
}
