import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {
  return (
    <div className="App">
      <h1>CV Builder</h1>
      <GeneralInfo />
      <EducationExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;