import Post from "../post/Post";
import "./style.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, id) => (
        <Post post={p} key={id} />
      ))}
    </div>
  );
}
