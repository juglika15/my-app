import "./BlogList.css";
import Blog from "./Blog/Blog";
import usePosts from "../../assets/hooks/usePosts";



export default function BlogList() {

  const { posts, loading } = usePosts(); 

  return (
    <main className="main">
      {loading && <p>Loading...</p>}
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}
      
    </main>
  );
}
