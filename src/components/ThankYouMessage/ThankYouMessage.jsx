import React from 'react';
import './ThankYouMessage.css';

const ThankYouMessage = ({ selectedRating, onGoBack }) => {
  return (
    <div className="thank-you-message">
      <img 
        src="https://media3.giphy.com/media/fxI1G5PNC5esyNlIUs/giphy.gif" 
        alt="Thank you" 
        className="illustration" 
      />
      <div className="selected-rating">You selected {selectedRating} out of 5</div>
      <h3>Thank you!</h3>
      <p>We are glad to help you.</p>
      
    </div>
  );
};

export default ThankYouMessage;
