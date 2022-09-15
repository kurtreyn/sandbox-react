import React from 'react';

export default function Button({ color, label, onClick }) {
  return (
    <button className="btn-container" onClick={onClick}>
      {label}
    </button>
  );
}
