async function useFetchPosts() {
  let posts = [];
  let error = null;

  try {
    const response = await fetch('https://dummyjson.com/posts');

    if (!response.ok) {
      throw new Error('Failed to fetch posts data');
    }

    const data = await response.json();
    posts = data.posts;
  } catch (err) {
    error = err.message;
  }
  return { posts, error };
}

export default useFetchPosts;
