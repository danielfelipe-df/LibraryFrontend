import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from backend when component mounts
    axios.get('http://localhost:9802/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to server');
      });
  }, []);

  return (
    <div className="app">
      <h1>Backend Response</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;