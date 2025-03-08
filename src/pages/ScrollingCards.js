import React, { useState } from "react";
import lib1 from "../pages/lib1.webp";
import lib2 from "../pages/lib2.jpg";
import lib3 from "../pages/lib3.jpg";
import lib4 from "../pages/lib4.jpg";
import lib5 from "../pages/lib5.webp";



const ScrollingCards = ({ onCardClick }) => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  // Card details with corresponding images
  const cardSections = [
    { name: "Home", image: lib2 },
    { name: "Our Library", image: lib4 },
    { name: "Resources", image: lib1 },
    { name: "Latest", image: lib3 },
    { name: "Visit", image: lib5 },
    { name: "Events", image: lib2 }
  ];
  

  const nextSlide = () => {
    if (index < cardSections.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <button onClick={prevSlide} disabled={index === 0} style={{ marginRight: "30px" }}>
        ❮
      </button>
      <div style={{ display: "flex", overflow: "hidden", width: "1100px" }}>
        <div
          style={{
            display: "flex",
            transform: `translateX(-${index * 310}px)`, // Adjusting for better spacing
            transition: "transform 0.5s ease"
          }}
        >
          {cardSections.map((section, i) => (
            <div
              key={i}
              onClick={() => onCardClick(section.name)}
              style={{
                minWidth: "300px",
                height: "200px",
                backgroundImage: `url(${section.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                marginRight: "10px",
                marginTop: "10px",
                cursor: "pointer",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
              }}
            >
              {section.name}
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} disabled={index >= cardSections.length - visibleCards} style={{ marginLeft: "10px" }}>
        ❯
      </button>
    </div>
  );
};

export default ScrollingCards;
