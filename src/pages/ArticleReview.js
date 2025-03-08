import React from "react";

const articles = [
  {
    title: "The Future of AI in Libraries",
    author: "Dr. John Doe",
    summary: "An in-depth analysis of how AI is transforming library management and user experience."
  },
  {
    title: "Digital Archives vs Physical Archives",
    author: "Prof. Jane Smith",
    summary: "Exploring the pros and cons of digital and physical library archives in modern education."
  },
  {
    title: "The Role of Libraries in a Digital World",
    author: "Emily Carter",
    summary: "Understanding how libraries are adapting to the rise of e-books and online resources."
  }
];

const ArticleReview = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ color: "#2C4477" }}>Article Reviews</h2>
      {articles.map((article, index) => (
        <div key={index} style={{
          background: "#F5F5F5", 
          padding: "15px", 
          marginBottom: "15px", 
          borderRadius: "8px", 
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <h3>{article.title}</h3>
          <p><strong>Author:</strong> {article.author}</p>
          <p>{article.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleReview;
