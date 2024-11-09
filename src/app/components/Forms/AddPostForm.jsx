import { useState } from 'react';
import './Form.css';

export default function EditPostForm({ setPosts, setAddActive }) {
  const [newPost, setNewPosts] = useState({
    title: '',
    body: '',
    views: 1,
    reactions: { likes: 0, dislikes: 0 },
    tags: ['newPost'],
    id: Date.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.body) return;
    setPosts((curPosts) => [newPost, ...curPosts]);
    setAddActive(false);
  };

  return (
    <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-button"
          onClick={() => setAddActive(false)}
        >
          &times;
        </button>
        <label htmlFor="title" className="label">
          title:
        </label>
        <input
          type="text"
          value={newPost?.title || ''}
          className="input"
          name="title"
          id="title"
          onChange={(e) =>
            setNewPosts((post) => {
              return { ...post, title: e.target.value };
            })
          }
        />

        <label htmlFor="body" className="label">
          text:
        </label>
        <textarea
          name="body"
          id="body"
          className="textarea"
          defaultValue={newPost?.body || ''}
          onChange={(e) =>
            setNewPosts((post) => {
              return { ...post, body: e.target.value };
            })
          }
        />
        <button
          type="submit"
          className="save-btn"
          disabled={newPost.title === '' || !newPost.body}
        >
          save
        </button>
      </form>
    </div>
  );
}
