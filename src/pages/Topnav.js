import React, { useState } from 'react';
import Logo from './vitlogo.png';

const Topnav = ({ setActiveSection }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const dropdownItems = {
    "Home": ["Overview", "Latest Updates", "Trending"],
    "Our Library": ["About Us", "Floor Plan", "Staff"],
    "Resources": ["News", "Articles", "Journals","E-Books"],
    "Latest": ["Achievements", "Events", "Gallery"],
    "Visit": ["Guides","FAQs","Contact Us"]
  };

  
  return (
    <nav style={{ 
      background: 'linear-gradient(to bottom, rgba(44, 68, 119, 0.9), rgba(57, 89, 144, 0.7))', 
      color: 'white', 
      padding: '10px', 
      display: 'flex', 
      alignItems: 'Right', 
      justifyContent: 'Right',
      position: 'fixed',
      top: 0,
      height: '100px',
      width: '100%',
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '20px' }}>
        <img src={Logo} alt="Logo" style={{ height: '80px', width: '250px', opacity: 0.8, marginRight: '20px' }} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0,paddingTop:'30px', justifyContent: 'center',paddingRight: '40px' }}>
        {Object.keys(dropdownItems).map((item, index) => (
          <li 
            key={item} 
            style={{ position: 'relative', margin: '0 15px', cursor: 'pointer', padding: '10px' }}
            onMouseEnter={() => setDropdownVisible(index)}
            onMouseLeave={() => setDropdownVisible(null)}
          >
            {item}
            {dropdownVisible === index && (
              <ul style={{ 
                position: 'absolute', 
                top: '40px', 
                left: '0', 
                background: 'rgba(64, 91, 151, 0.9)',
                listStyle: 'none', 
                padding: '15px', 
                minWidth: '250px',
                textAlign: 'left',
                margin: '1px solid blue'
              }}>
                {dropdownItems[item].map((subItem) => (
                  <li key={subItem} style={{ padding: '5px 10px',margin:'2px solid blue', cursor: 'pointer' }} onClick={() => setActiveSection(`${item} - ${subItem}`)}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li style={{ margin: '0 15px', cursor: 'pointer', padding: '10px' }} onClick={() => setShowLogin(true)}>Login</li>
      </ul>
      {showLogin && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          zIndex: 1001
        }}>
          <h2>Login</h2>
          <button onClick={() => setShowLogin(false)}>Close</button>
        </div>
      )}
    </nav>
  );
};

export default Topnav;
