import Link from 'next/link';
import './post.css';
import DeleteButton from '../components/Buttons/DeleteButton';

export default function Post({ post, onDelete }) {
  return (
    <div className="post-item">
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>

        <strong>Tags:</strong>
        <ul className="tags">
          {post.tags.map((tag) => (
            <li key={tag}>
              <span className="post-tags">{tag}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '10px' }}>
          <button className="post-button">
            👍 Like {post.reactions.likes}
          </button>
          <button className="post-button">
            👎 Dislike {post.reactions.dislikes}
          </button>
        </div>

        <p className="post-views">Views: {post.views}</p>
        <Link href={`/blog/${post.id}`} className="moreCardBtn">
          more details
        </Link>
        <DeleteButton id={post.id} onDelete={onDelete} />
      </div>
    </div>
  );
}
