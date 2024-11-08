'use client';

import { useEffect, useState } from 'react';
import useFetchPosts from '../hooks/useFetchPosts';
import Post from './post';

export default function PostList() {
  const [posts, setPosts] = useState([]);

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
      {posts.map((post) => (
        <Post post={post} key={post.id} onDelete={handleDelete} />
      ))}
    </main>
  );
}
