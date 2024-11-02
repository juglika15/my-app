async function useFetchPosts() {
  try {
    const loading = false;

    const res = await fetch('https://dummyjson.com/posts');

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await res.json();
    const posts = data.posts;
    return { posts, loading };
  } catch (error) {
    return { posts: [], loading };
  }
}

export default useFetchPosts;
