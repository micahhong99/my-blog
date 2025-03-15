import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownPage = () => {
  const [content, setContent] = useState("");
  const baseUrl = import.meta.env.BASE_URL; // 适配 Vite base URL
  const markdownPath = `${baseUrl}doc/py.md`; // 拼接正确的路径

  useEffect(() => {
    fetch(markdownPath)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading Markdown:", err));
  }, [markdownPath]);

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
