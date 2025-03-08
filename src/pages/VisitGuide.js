import React, { useState } from "react";
import borrowImage from "../pages/lib2.jpg"; // Add appropriate images
import returnImage from "../pages/lib3.jpg";
import membershipImage from "../pages/lib4.jpg";

const VisitGuide = () => {
  const steps = [
    { 
      title: "How to borrow a book?", 
      details: [
        "Locate the book using the library catalog or by browsing the shelves.",
        "Take the book to the self-checkout scanning system.",
        "Scan your library card and then scan the book's barcode.",
        "Wait for system confirmation and take your receipt.",
        "A verification email will be sent to your registered email address.",
        "Make sure to return the book on time to avoid late fees."
      ],
      image: borrowImage
    },
    { 
      title: "How to return a book?", 
      details: [
        "Go to the automated return station in the library.",
        "Scan the book’s barcode at the return kiosk.",
        "Place the book in the return bin after scanning.",
        "The system will automatically update your borrowing history.",
        "A return confirmation email will be sent to your registered email.",
        "You can check your return status online in your library account."
      ],
      image: returnImage
    },
    { 
      title: "Global Membership", 
      details: [
        "Sign up for global membership through the library website.",
        "Get a digital membership card with a unique ID.",
        "Borrow books and access resources in partner libraries worldwide.",
        "Use the self-service kiosks for borrowing and returning books.",
        "Receive automated email notifications for due dates and renewals.",
        "Enjoy exclusive access to digital journals and research papers."
      ],
      image: membershipImage
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2 style={{ marginBottom: "20px", color: "#2C4477" }}>Library Visit Guide</h2>
      
      {/* Step Blocks */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{
              width: "200px",
              height: "150px",
              background: selectedIndex === index ? "#3A5998" : "#2C4477",
              color: "white",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              transition: "all 0.4s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
            }}
          >
            {step.title}
          </div>
        ))}
      </div>

      {/* Expanded Section */}
      {selectedIndex !== null && (
        <div style={{
          marginTop: "30px",
          padding: "30px",
          background: "#F5F5F5",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          margin: "30px auto",
          textAlign: "left"
        }}>
          <h3 style={{ color: "#2C4477" }}>{steps[selectedIndex].title}</h3>
          <ul>
            {steps[selectedIndex].details.map((point, i) => (
              <li key={i} style={{ marginBottom: "8px", fontSize: "16px" }}>{point}</li>
            ))}
          </ul>
          <img 
            src={steps[selectedIndex].image} 
            alt={steps[selectedIndex].title} 
            style={{ width: "100%", maxHeight: "300px", borderRadius: "10px", marginTop: "10px" }} 
          />
        </div>
      )}
    </div>
  );
};

export default VisitGuide;
