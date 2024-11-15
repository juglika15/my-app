'use client';

import { useEffect, useState } from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import Post from './post';
import EditPostForm from '../components/Forms/EditPostForm';
import AddButton from '../components/Buttons/AddButton';
import AddPostForm from '../components/Forms/AddPostForm';
import { PostType } from '../../../types/api';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState<PostType | null>(null);
  const [addActive, setAddActive] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await useFetchPosts();

      setPosts(posts);
    }
    fetchPosts();
  }, []);

  function handleDelete(id: number) {
    setPosts((curPosts) => curPosts.filter((post: PostType) => post.id !== id));
  }

  return (
    <main className="main dark:bg-orange-300">
      <AddButton name={'Post'} setAddActive={setAddActive} />
      {posts.map((post: PostType) => (
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