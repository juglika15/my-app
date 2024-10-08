import './blog.css';
import Link from 'next/link';

const fetchPost = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)

  return res.json();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
};

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/posts?limit=0&skip=0'); 
  const { posts } = await res.json();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await fetchPost(id);

  return (
    <div id="postPage">
      <div className="heading">
        <h1 className="postTitle">{post.title}</h1>
        <p className="author">By {post.user}</p>
        <p className="date">{formatDate(post.date)}</p>
      </div>
      
      <div className="contentSection">
        <p className="content">{post.body}</p>
      </div>

      <div className="tags">
        {post.tags.map((tag, index) => (
          <Link key={index} href={`/tags/${tag}`} className="tag">
            {tag}
          </Link>
        ))}
      </div>

      <div className="commentsSection">
        <h3 className="commentsHeading">Comments</h3>
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">
            <h6>{comment.user}</h6>
            <p className="commentDate">{formatDate(comment.date)}</p>
            <p className="commentBody">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
