'use client';

import { useEffect, useState } from 'react';
import useFetchPosts from '../hooks/useFetchPosts';
import Post from './post';
import EditPostForm from '../components/Forms/EditPostForm';
import AddButton from '../components/Buttons/AddButton';
import AddPostForm from '../components/Forms/AddPostForm';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [addActive, setAddActive] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await useFetchPosts();

      setPosts(posts);
    }
    fetchPosts();
  }, []);

  function handleDelete(id) {
    setPosts((curPosts) => curPosts.filter((post) => post.id !== id));
  }

  return (
    <main className="main">
      <AddButton name={'Post'} setAddActive={setAddActive} />
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          onDelete={handleDelete}
          setActivePost={setActivePost}
        />
      ))}
      {addActive && (
        <AddPostForm setPosts={setPosts} setAddActive={setAddActive} />
      )}
      {activePost && (
        <EditPostForm
          post={activePost}
          setPosts={setPosts}
          setActivePost={setActivePost}
        />
      )}
    </main>
  );
}
