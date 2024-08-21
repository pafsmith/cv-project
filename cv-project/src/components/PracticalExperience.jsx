import React, { useState } from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = () => {
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="practical-experience">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="companyName" placeholder="Company Name" value={experience.companyName} onChange={handleChange} />
          <input type="text" name="positionTitle" placeholder="Position Title" value={experience.positionTitle} onChange={handleChange} />
          <textarea name="responsibilities" placeholder="Main Responsibilities" value={experience.responsibilities} onChange={handleChange} />
          <input type="date" name="dateFrom" value={experience.dateFrom} onChange={handleChange} />
          <input type="date" name="dateUntil" value={experience.dateUntil} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.companyName}</p>
          <p>Position: {experience.positionTitle}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.dateFrom}</p>
          <p>Until: {experience.dateUntil}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
