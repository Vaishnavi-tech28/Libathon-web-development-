import React, { useState } from "react";

const images = [
  { src: "library1.jpg", title: "Main Library Hall", info: "A vast collection of books and digital resources." },
  { src: "library2.jpg", title: "Reading Section", info: "A quiet space for reading and research." },
  { src: "library3.jpg", title: "Digital Lab", info: "Equipped with modern computers for research." },
  { src: "library4.jpg", title: "Discussion Rooms", info: "Private rooms for group studies and discussions." },
  { src: "library5.jpg", title: "Rare Books Section", info: "A collection of ancient and rare manuscripts." }
];

const Gallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Clickable Block */}
      {!open ? (
        <div 
          onClick={() => setOpen(true)}
          style={{
            background: "#2C4477",
            color: "white",
            padding: "20px",
            cursor: "pointer",
            borderRadius: "10px",
            display: "inline-block",
            fontSize: "20px",
            fontWeight: "bold",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
          }}
        >
          VIT Library 📚 (Click to View Gallery)
        </div>
      ) : (
        <div>
          <h2 style={{ color: "#2C4477" }}>📷 VIT Library Gallery</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "15px",
            padding: "20px"
          }}>
            {images.map((img, index) => (
              <div key={index} style={{ position: "relative", borderRadius: "10px", overflow: "hidden" }}>
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    transition: "opacity 0.3s ease"
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  transition: "opacity 0.3s ease"
                }}
                className="hover-effect">
                  <h4>{img.title}</h4>
                  <p style={{ fontSize: "12px", maxWidth: "80%" }}>{img.info}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setOpen(false)}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              background: "#2C4477",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px"
            }}>
            Close Gallery ❌
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
