import React from 'react';
import './styles.css'

const Resume = () => {

  const samplePDF = './AlejandroSabogal-SoftwareDevResume.pdf'

  return (
    <div className="resume-container">
      <embed
        className="resume"
        src={samplePDF}
        type="application/pdf"
      />
    </div>
  );
};

export default Resume;