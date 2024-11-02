import useFetchPosts from '../hooks/useFetchPosts';
import Post from './post';
import Spinner from '../spinner/spinner';

export default async function PostList() {
  const { posts, loading } = await useFetchPosts();

  return (
    <main className="main">
      {loading && (
        <>
          <span>Loading...</span>
          <Spinner />
        </>
      )}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
