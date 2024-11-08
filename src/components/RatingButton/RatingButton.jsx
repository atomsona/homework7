import React from 'react';
import './RatingButton.css';

function RatingButton({ rating, selected, onClick }) {
  return (
    <button
      className={`rating-button ${selected ? 'selected' : ''}`}
      onClick={() => onClick(rating)}
    >
      {rating}
    </button>
  );
}

export default RatingButton;