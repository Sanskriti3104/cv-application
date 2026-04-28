import { useState } from "react";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ProfessionalSummary({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.professionalSummary.text);
  const { toggleSection } = useSectionVisibility(setCvData, "professionalSummary");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({
      ...cvdata,
      professionalSummary: {
        ...cvdata.professionalSummary,
        text: formdata,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}
      className={`section professionalSummary ${!cvdata.professionalSummary.visible ? "section--hidden" : ""}`}
      id="summary-section">

      <div className="section__header">
        <h1 className="section__title">Professional Summary</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={toggleSection}
        >
          {cvdata.professionalSummary.visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

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
          Save
        </button>
      </div>
    </form>
  );
}

export default ProfessionalSummary;