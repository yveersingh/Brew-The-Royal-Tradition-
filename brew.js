import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert("Welcome to the Royal Circle!");
  };

  return (
    <div className="landing-container">
      <header>
        <div className="logo">ROYAL BREW</div>
      </header>
      
      <main className="hero-section">
        <span className="launch-tag">Launching Soon</span>
        <h1>Brew the Royal Tradition</h1>
        <p className="description">
          Experience the opulence of ancient Indian households. Our premium instant 
          chai premix brings the heritage of slow-brewed tea to your modern lifestyle.
        </p>

        <form onSubmit={handleSubmit} className="signup-form">
          <input 
            type="email" 
            placeholder="Enter your email for an exclusive invite" 
            required 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join the Circle</button>
        </form>
      </main>

      <footer>
        <div className="social-links">
          <a href="#ig">Instagram</a>
          <a href="#fb">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

export default App;document.getElementById('signup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! You have been added to our exclusive list.');
        });
