import React, { useState } from "react";

const books = [
  { title: "The AI Revolution", author: "Nick Bostrom", cover: "ai_book.jpg" },
  { title: "Deep Learning", author: "Ian Goodfellow", cover: "deep_learning.jpg" },
  { title: "Cybersecurity 101", author: "Kevin Mitnick", cover: "cybersecurity.jpg" },
  { title: "Data Science Handbook", author: "Jake VanderPlas", cover: "data_science.jpg" },
  { title: "Python for Beginners", author: "Mark Lutz", cover: "python_book.jpg" },
  { title: "Blockchain Basics", author: "Daniel Drescher", cover: "blockchain.jpg" },
  { title: "Cloud Computing", author: "Thomas Erl", cover: "cloud.jpg" },
  { title: "The Internet of Things", author: "Samuel Greengard", cover: "iot.jpg" },
  { title: "Cryptography and Security", author: "Bruce Schneier", cover: "crypto.jpg" },
  { title: "Big Data Analytics", author: "James Smith", cover: "big_data.jpg" }
];

const EBooks = () => {
  const [page, setPage] = useState(0);
  const booksPerPage = 10;
  
  const startIndex = page * booksPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + booksPerPage);
  
  return (
    <div style={{ display: "flex", padding: "20px", maxWidth: "900px", margin: "auto" }}>
      {/* Book List */}
      <div style={{ flex: 1 }}>
        <h2 style={{ color: "#2C4477" }}>E-Books Collection</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {selectedBooks.map((book, index) => (
            <li key={index} style={{
              padding: "10px", 
              borderBottom: "1px solid #ddd", 
              cursor: "pointer",
              display: "flex", 
              justifyContent: "space-between"
            }}>
              <span>{book.title} - <i>{book.author}</i></span>
            </li>
          ))}
        </ul>
        
        {/* Pagination Controls */}
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
          <button onClick={() => setPage(page - 1)} disabled={page === 0} style={{
            marginRight: "10px", 
            padding: "5px 10px", 
            background: "#2C4477", 
            color: "white", 
            border: "none",
            cursor: "pointer"
          }}>
            Previous
          </button>
          <button onClick={() => setPage(page + 1)} disabled={startIndex + booksPerPage >= books.length} style={{
            padding: "5px 10px", 
            background: "#2C4477", 
            color: "white", 
            border: "none",
            cursor: "pointer"
          }}>
            Next
          </button>
        </div>
      </div>

      {/* Book Preview (on the right) */}
      <div style={{ width: "200px", marginLeft: "20px", position: "sticky", top: "20px" }}>
        <h3>Preview</h3>
        <img 
          src={selectedBooks[0].cover} 
          alt="Book Preview" 
          style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
        />
      </div>
    </div>
  );
};

export default EBooks;
