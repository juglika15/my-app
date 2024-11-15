import '../post.css';
import useFetchPost from '../../../hooks/useFetchPost';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const post = await useFetchPost(id);

  if (!post?.id) {
    notFound();
  }

  return (
    <div className="main dark:bg-orange-300">
      <div className="post-item-single">
        <div className="post-content dark:bg-cyan-700">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-preview">{post.body}</p>

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
        </div>
      </div>
    </div>
  );
}
