import useFetchPosts from '../hooks/useFetchPosts';
import Post from './post';

export default async function PostList() {
  const { posts } = await useFetchPosts();

  return (
    <main className="main">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
