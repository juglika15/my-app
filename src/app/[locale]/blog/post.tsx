import { Link } from '../../../i18n/routing';
import './post.css';
import DeleteButton from '../components/Buttons/DeleteButton';
import EditPostButton from '../components/Buttons/EditPostButton';
import { PostType } from '../types/api';

export default function Post({
  post,
  onDelete,
  setActivePost,
}: {
  post: PostType;
  onDelete: (id: number) => void;
  setActivePost: React.Dispatch<React.SetStateAction<PostType | null>>;
}) {
  return (
    <div className="post-item dark:bg-cyan-700">
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="text-truncate">{post.body}</p>
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
        <EditPostButton post={post} setActive={setActivePost} />
        <DeleteButton id={post.id} onDelete={onDelete} />
      </div>
    </div>
  );
}
