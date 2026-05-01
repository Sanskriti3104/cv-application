import { useState, useEffect } from "react";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ProfessionalSummary({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.professionalSummary.text);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setformdata(cvdata.professionalSummary.text);
  }, [cvdata.professionalSummary]);
  
  const { toggleSection } = useSectionVisibility(setCvData, "professionalSummary");

  const validate = () => {
    let newErrors = {};

    if (!formdata.trim()) {
      newErrors.summary = "Professional Summary is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setCvData({
      ...cvdata,
      professionalSummary: {
        ...cvdata.professionalSummary,
        text: formdata,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`section professionalSummary ${
        !cvdata.professionalSummary.visible ? "section--hidden" : ""
      }`}
      id="summary-section"
    >
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
          className={`input-field ${errors.summary ? "error-border" : ""}`}
          placeholder="Write a brief summary about yourself, your skills, and career goals"
          value={formdata}
          onChange={(e) => setformdata(e.target.value)}
        ></textarea>

        {errors.summary && <p className="error">{errors.summary}</p>}
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