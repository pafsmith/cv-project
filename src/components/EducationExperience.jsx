import React, { useState } from 'react';
import '../styles/EducationExperience.css';

const EducationExperience = () => {
  const [education, setEducation] = useState({
    school: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="education-experience">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="school" placeholder="School Name" value={education.school} onChange={handleChange} />
          <input type="text" name="titleOfStudy" placeholder="Title of Study" value={education.titleOfStudy} onChange={handleChange} />
          <input type="date" name="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title of Study: {education.titleOfStudy}</p>
          <p>Date of Study: {education.dateOfStudy}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;
