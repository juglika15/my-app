async function useFetchPost(id) {
  let post = {};
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }

    post = await res.json();
  } catch (err) {
    console.error(err);
  }
  return post;
}

export default useFetchPost;
