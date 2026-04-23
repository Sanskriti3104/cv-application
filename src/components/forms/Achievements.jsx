import { useState } from "react";

function Achievements({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.achievements);

  const handleChange = (value) => {
    setformdata({
      ...formdata,
      description: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({
      ...cvdata,
      achievements: formdata,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="section achievements"
      id="achievements-section"
    >
      <h1 className="section__title">
        Achievements & Certifications
      </h1>

      <div className="section__form">
        <textarea
          className="input-field"
          value={formdata.description}
          onChange={(e) => handleChange(e.target.value)}
          rows={5}
        />
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Achievements;