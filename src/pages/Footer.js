import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{
      background: "#2C4477",
      color: "white",
      padding: "20px 0",
      textAlign: "center",
      marginTop: "20px"
    }}>
      {/* Footer Sections */}
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", maxWidth: "1100px", margin: "auto" }}>
        
        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
            <li><a href="#library" style={{ color: "white", textDecoration: "none" }}>Our Library</a></li>
            <li><a href="#resources" style={{ color: "white", textDecoration: "none" }}>Resources</a></li>
            <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3>Follow Us</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook color="white" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter color="white" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram color="white" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin color="white" size={24} />
            </a>
            <a href="mailto:info@example.com">
              <Mail color="white" size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        © {new Date().getFullYear()} Library. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
