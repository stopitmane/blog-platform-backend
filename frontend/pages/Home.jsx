import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API}/posts/`).then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.map(post => (
        <div key={post.slug} className="mb-4 border-b pb-2">
          <Link to={`/post/${post.slug}`} className="text-xl text-blue-500 hover:underline">{post.title}</Link>
          <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
