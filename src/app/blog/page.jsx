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

function Blog({ blog }) {
  return (
    <div className="blog-item">
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-preview">{blog.body}</p>

        <strong>Tags:</strong>
        <ul>
          {blog.tags.map((tag) => (
            <li>
              <span className="blog-tags">{tag}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "10px" }}>
          <button className="blog-button">
            👍 Like {blog.reactions.likes}
          </button>
          <button className="blog-button">
            👎 Dislike {blog.reactions.dislikes}
          </button>
        </div>

        <p className="blog-views">Views: {blog.views}</p>
      </div>
    </div>
  );
}
