import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${API}/posts/`, { title, content });
      alert("Post created!");
      setTitle(""); setContent("");
    } catch {
      alert("Failed to save");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">New Post</h1>
      <input
        className="w-full p-2 border mb-4"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SimpleMDE value={content} onChange={setContent} />
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Publish
      </button>
    </div>
  );
}
