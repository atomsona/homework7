import React, { useState } from 'react';
import RatingButton from '../RatingButton/RatingButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import ThankYouMessage from '../ThankYouMessage/ThankYouMessage';
import './RatingComponent.css';

function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) setSubmitted(true);
  };

  const handleComeback = () => {
    setSubmitted(false);
    setSelectedRating(null);
  };

  return (
    <div className="rating-component">
      {!submitted ? (
        <div className="rating-card">
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. Your feedback is appreciated!</p>
          <div className="rating-buttons">
            {[1, 2, 3, 4, 5].map((rating) => (
              <RatingButton
                key={rating}
                rating={rating}
                selected={selectedRating === rating}
                onClick={() => handleRatingClick(rating)}
              />
            ))}
          </div>
          <SubmitButton onClick={handleSubmit} disabled={selectedRating === null} />
        </div>
      ) : (
        <ThankYouMessage selectedRating={selectedRating} onComeback={handleComeback} />
      )}
    </div>
  );
}

export default RatingComponent;