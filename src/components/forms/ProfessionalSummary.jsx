import { useState } from "react";

function ProfessionalSummary({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.professionalSummary);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({ ...cvdata, professionalSummary: formdata });
  };
  
  return (
    <form onSubmit={handleSubmit} className="section summary" id="summary-section">
      <h1 className="section__title">Professional Summary</h1>

      <div className="section__form">
        <label>Summary</label>
        <textarea
          rows="5"
          className="input-field"
          placeholder="Write a brief summary about yourself, your skills, and career goals"
          value={formdata}
          onChange={(e) =>
            setformdata(e.target.value)
          }
        ></textarea>
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ProfessionalSummary;