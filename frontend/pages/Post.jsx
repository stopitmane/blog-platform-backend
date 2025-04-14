import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const API = import.meta.env.VITE_API_URL;

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${API}/posts/${slug}/`).then((res) => setPost(res.data));
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(post.created_at).toLocaleString()}</p>
      <ReactMarkdown className="prose prose-invert">{post.content}</ReactMarkdown>
    </div>
  );
}
