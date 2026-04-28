import { useState } from "react";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Achievements({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.achievements.items[0]);
  const { toggleSection } = useSectionVisibility(setCvData, "achievements");;

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
      achievements: { ...cvdata.achievements, items: [formdata] },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`section achievements ${!cvdata.achievements.visible ? "section--hidden" : ""}`}
      id="achievements-section"
    >
      <div className="section__header">
        <h1 className="section__title">Achievements & Certifications</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={toggleSection}
        >
          {cvdata.achievements.visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="section__form">
        <textarea
          className="input-field"
          placeholder="Enter your achievements and certifications (one per line)"
          value={formdata.description}
          onChange={(e) => handleChange(e.target.value)}
          rows={5}
        />
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default Achievements;