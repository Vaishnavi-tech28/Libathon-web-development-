import React from "react";

const journals = [
  { title: "Machine Learning Trends", author: "Dr. Alan Turing", year: 2024 },
  { title: "Cybersecurity in 2025", author: "Dr. Susan Clark", year: 2024 },
  { title: "Quantum Computing Advances", author: "Dr. Richard Feynman", year: 2023 },
  { title: "5G and Beyond", author: "Dr. Ada Lovelace", year: 2024 },
  { title: "Neuroscience and AI", author: "Dr. James Watson", year: 2023 }
];

const Journals = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#2C4477" }}>Trending Journals</h2>
      <div style={{
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "20px", 
        marginTop: "20px"
      }}>
        {journals.map((journal, index) => (
          <div key={index} style={{
            background: "#F5F5F5", 
            padding: "15px", 
            borderRadius: "8px", 
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
          }}>
            <h3>{journal.title}</h3>
            <p><strong>Author:</strong> {journal.author}</p>
            <p><strong>Year:</strong> {journal.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journals;
