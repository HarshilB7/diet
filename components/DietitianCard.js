// src/components/DieticianCard.js
import React from 'react';
import '../styles/components.css';

const DieticianCard = ({ dietician }) => {
  return (
    <div className="dietician-card">
      <div className="dietician-image">
        <img src={dietician.image} alt={dietician.name} />
      </div>
      <div className="dietician-info">
        <h2>{dietician.name}</h2>
        <h3>{dietician.specialty}</h3>
        <p>{dietician.description}</p>
        <div className="dietician-details">
          <div className="detail-item">
            <span className="label">Experience:</span>
            <span>{dietician.experience}</span>
          </div>
          <div className="detail-item">
            <span className="label">Education:</span>
            <span>{dietician.education}</span>
          </div>
          <div className="detail-item">
            <span className="label">Availability:</span>
            <span>{dietician.availability}</span>
          </div>
        </div>
        <div className="certifications">
          {dietician.certifications.map((cert, index) => (
            <span key={index} className="certification-badge">{cert}</span>
          ))}
        </div>
        <button className="book-appointment">Book an Appointment</button>
      </div>
    </div>
  );
};

export default DieticianCard;
