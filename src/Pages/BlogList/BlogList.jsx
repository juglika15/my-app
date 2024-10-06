import "./BlogList.css";
import Blog from "./Blog/Blog";
import usePosts from "../../assets/hooks/usePosts";



export default function BlogList() {

  const { posts } = usePosts(); 

  return (
    <main className="main">
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}
      
    </main>
  );
}
