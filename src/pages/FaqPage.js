import React, { useState } from "react";

const FaqPage = () => {
  const faqs = [
    { question: "What is the layout of the library?", answer: "The library is divided into sections: reading rooms, digital labs, reference areas, and discussion spaces." },
    { question: "Where can I find the research section?", answer: "The research section is on the second floor, near the digital archives." },
    { question: "Are study rooms available for booking?", answer: "Yes, students and staff can book study rooms through the online portal or at the front desk." },
    { question: "How do I access digital resources?", answer: "You can log in to the library portal with your university credentials to access e-books, journals, and research papers." },
    { question: "Is there a quiet study area?", answer: "Yes, the third floor has a designated quiet zone for individual study." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#2C4477" }}>Library Floor Plan - FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <button
            onClick={() => toggleFAQ(index)}
            style={{
              background: "none",
              border: "none",
              width: "100%",
              textAlign: "left",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
              padding: "10px",
              color: "#2C4477"
            }}
          >
            {faq.question} {openIndex === index ? "▲" : "▼"}
          </button>
          {openIndex === index && (
            <p style={{ padding: "10px", background: "#f5f5f5", borderRadius: "5px" }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
