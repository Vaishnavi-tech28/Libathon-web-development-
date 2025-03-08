import React, { useState } from 'react';
import Topnav from './pages/Topnav';
import ScrollingCards from './pages/ScrollingCards';
import pic2 from './pages/Librarypic.jpg';
import pic1 from './pages/lib4.jpg';
import FaqPage from "./pages/FaqPage";
import VisitGuide from "./pages/VisitGuide";
import ArticleReview from './pages/ArticleReview';
import Journals from './pages/Journals';
import EBooks from './pages/EBooks';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';
import NewsTicker from './pages/NewsTicker';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [openFloors, setOpenFloors] = useState({});

  const toggleFloor = (floor) => {
    setOpenFloors((prev) => ({
      ...prev,
      [floor]: !prev[floor],
    }));
  };
  const renderContent = () => {
    <NewsTicker />
    switch (activeSection) {
      case "Our Library - About Us":
        return (
          <div style={{ display: "flex", alignItems: "center", padding: "20px", maxWidth: "1000px", margin: "auto" }}>
            <div style={{ flex: 1, paddingRight: "20px" }}>
              <h2>About Our Library</h2>
              <p>The Central library has been established with state-of-the-art infrastructure to international standards.</p>
              <ul>
                <li>Services</li>
                <li>Circulation Service</li>
                <li>Reference Service</li>
                <li>Web OPAC (On-line Public Access Catalogue)</li>
                <li>Resource Sharing (Inter Library Loan)</li>
                <li>Multimedia Resource Service</li>
                <li>On-line Databases</li>
                <li>NPTEL e-Learning Facility</li>
                <li>User Education Program</li>
                <li>Tele / Video Conferencing</li>
              </ul>
              <button 
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  border: "none",
                  background: "#4a69bb",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
                onClick={() => alert("More content will be loaded...")}
              >
                Read More
              </button>
            </div>
            <div style={{ flex: 1 }}>
              <img src={pic1} alt="Library" style={{ width: "100%", borderRadius: "10px" }} />
            </div>
          </div>
        );

      case "Our Library - Floor Plan":
        return (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Library: Floor Plan</h2>
            <p>Click on a floor to view its sections.</p>
            {[
              { floor: "Ground Floor", options: ["Reception", "Help Desk", "Seating Area", "Magazines"] },
              { floor: "First Floor", options: ["Fiction Section", "Study Rooms", "E-Library", "Computers"] },
              { floor: "Second Floor", options: ["Non-Fiction Section", "Research Papers", "Journals", "Discussion Rooms"] },
              { floor: "Third Floor", options: ["Archives", "Rare Books", "Conference Room", "Reading Area"] }
            ].map(({ floor, options }) => (
              <div 
                key={floor} 
                style={{
                  width: "550px",
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  background: "#f0f0f0",
                  margin: "10px auto",
                  cursor: "pointer",
                  textAlign: "center",
                  display: "flex",
                  flex: "flex-wrap",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
                }} 
                onClick={() => toggleFloor(floor)}
              >
                <div style={{ fontWeight: "bold", fontSize: "18px", display: "flex", justifyContent: "space-between" }}>
                  {floor} 
                  <span>{openFloors[floor] ? "🔼" : "🔽"}</span>
                </div>
                {openFloors[floor] && (
                  <ul style={{ marginTop: "10px", paddingLeft: "15px" }}>
                    {options.map((option, i) => (
                      <li key={i} style={{ padding: "5px 0" }}>{option}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        );

      case "Visit - FAQs":
        return <FaqPage />;
      case "Visit - Guides":
        return <VisitGuide />;
      case "Resources - Articles":
        return <ArticleReview />;
      case "Resources - Journals":
        return <Journals />;
      case "Resources - E-Books":
        return <EBooks />;
      case "Latest - Gallery":
        return <Gallery />;
      case "Resources - News":
        return <NewsTicker />;
      default:
        return <p>Select a section from the dropdown to see content.</p>;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Topnav setActiveSection={setActiveSection} />

      <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <img 
          src={pic2} 
          alt="Library Background" 
          className="bg-image" 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
        />
      </div>

      <ScrollingCards onCardClick={setActiveSection} />

      <div style={{ padding: '25px', marginTop: '20px', flex: 1 }}>
        {renderContent()}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
