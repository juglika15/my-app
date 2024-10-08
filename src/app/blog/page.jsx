'use client';

import usePosts from '../../assets/hooks/usePosts';
import Blog from './Blog';
import Spinner from '../../assets/spinner/spinner';

export default function BlogList() {
  const { posts, loading } = usePosts();
  console.log(posts[0]);

  return (
    <main className="main">
      {loading && (
        <>
          <span>Loading...</span>
          <Spinner />
        </>
      )}
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}
    </main>
  );
}
