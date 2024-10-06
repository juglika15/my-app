import { useEffect } from "react";
import { useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return { posts };
};

export default usePosts;