import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Editor from "./pages/Editor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<Post />} />
      <Route path="/admin" element={<Editor />} />
    </Routes>
  </BrowserRouter>
);
