import React from 'react';
import './ThankYouMessage.css';

function ThankYouMessage({ selectedRating, onComeback }) {
  return (
    <div className="thank-you-message">
      
      <p className="selected-rating">You selected {selectedRating} out of 5</p>
      <h3>Thank you!</h3>
      <p>We appreciate your feedback and are glad to help you.</p>
    
      <button onClick={onComeback} className="comeback-button">
        Comeback
      </button>
    </div>
  );
}

export default ThankYouMessage;