import { useState } from "react";
import "./Blog.css";

export default function Blog({ blog }) {


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
          <button className="blog-button">👍 Like {blog.reactions.likes}</button>
          <button className="blog-button">👎 Dislike {blog.reactions.dislikes}</button>
        </div>
      </div>
    </div>
  );
}
