import React from './node_modules/react';
import './styles.css'

const Resume = () => {

  const samplePDF = './AlejandroSabogal_FrontEndDevResume.pdf'

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