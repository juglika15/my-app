import { PostType } from '../[locale]/types/api';

async function useFetchPosts() {
  let posts: PostType[] = [];

  try {
    const response = await fetch('https://dummyjson.com/posts');

    if (!response.ok) {
      throw new Error('Failed to fetch posts data');
    }

    const data = await response.json();
    posts = data.posts;
  } catch (err) {
    console.error(err);
  }
  return posts;
}

export default useFetchPosts;
