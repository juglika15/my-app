import { PostType } from '../[locale]/types/api';

async function useFetchPost(id: string): Promise<PostType | null> {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }

    const post: PostType = await res.json();
    return post;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default useFetchPost;
