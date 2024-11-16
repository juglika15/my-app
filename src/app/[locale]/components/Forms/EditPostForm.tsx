import { PostType } from '../../types/api';
import './Form.css';

export default function EditPostForm({
  post,
  setPosts,
  setActivePost,
}: {
  post: PostType;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  setActivePost: React.Dispatch<React.SetStateAction<PostType | null>>;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!post.title || !post.body) return;
    setPosts((curPosts) =>
      curPosts.map((curPost) => (curPost.id !== post.id ? curPost : post))
    );
    setActivePost(null);
  }

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-button"
          onClick={() => setActivePost(null)}
        >
          &times;
        </button>
        <label htmlFor="title" className="label">
          title:
        </label>
        <input
          type="text"
          value={post?.title || ''}
          className="input"
          name="title"
          id="title"
          onChange={(e) => setActivePost({ ...post, title: e.target.value })}
        />

        <label htmlFor="body" className="label">
          text:
        </label>
        <textarea
          name="body"
          id="body"
          className="textarea"
          defaultValue={post?.body}
          onChange={(e) => setActivePost({ ...post, body: e.target.value })}
        />
        <button
          type="submit"
          className="save-btn"
          disabled={!post?.title || !post?.body}
        >
          save changes
        </button>
      </form>
    </div>
  );
}
