import React from 'react';
import './SubmitButton.css';

function SubmitButton({ onClick, disabled }) {
  return (
    <button
      className={`submit-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      Submit
    </button>
  );
}

export default SubmitButton;