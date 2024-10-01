import "./Blog.css";

export default function Blog({ blog }) {
  return (
    <div className="blog-item">
      <img src={blog.imageUrl} alt={blog.title} />
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-preview">{blog.preview}</p>
        <p className="blog-author">
          By <em>{blog.author}</em>
        </p>
      </div>
    </div>
  );
}
