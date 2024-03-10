import "../Globe.css"; // Import the CSS file for styling the globe
const crystalImage = "../assets/crystal.png"
import { useState } from 'react';

function Globe() {
  return (
    <div>
      <h2>Affirmation Crystal</h2>
      <div className="globe-container">
        <div className="globe">
          <img src={crystalImage} alt="Crystal" className="crystal-image" />
        </div>
      </div>
      <div className="app-container">
        
        <main>
          
          <div className="affirmation">{affirmation}</div>
          <button id="generate-button" onClick={generateAffirmation}>
            Generate Affirmation
          </button>
        </main>
        <footer>
          <p>&copy; 2024 Affirmation Crystal Clarity</p>
        </footer>
      </div>
    </div>
  );
}

export default Globe;
