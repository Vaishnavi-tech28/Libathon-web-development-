import React, { useState, useEffect } from 'react';

const NewsTicker = () => {
  const [news, setNews] = useState([]);
  const [position, setPosition] = useState(0);

  // Function to fetch latest news from staff server
  const fetchNews = async () => {
    try {
      const response = await fetch('https://your-staff-server.com/api/news'); // Replace with actual API
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews(["Welcome to the Library!", "New books have arrived!", "Exam week is coming up!", "Library will be closed on Sunday."]); // Mock news
    }
  };

  // Fetch news on component mount and every 30 seconds
  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setPosition((prev) => (prev + 1) % news.length);
    }, 4000); // Change news every 4 seconds
    return () => clearInterval(scrollInterval);
  }, [news]);

  return (
    <div style={{ 
      background: '#001f3f', color: 'white', padding: '10px', overflow: 'hidden',
      width: '100%', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' 
    }}>
      {news.length > 0 ? news[position] : "Loading news..."}
    </div>
  );
};

export default NewsTicker;
