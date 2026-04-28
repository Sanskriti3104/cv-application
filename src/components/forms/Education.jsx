import useDynamicSection from "../../hooks/useDynamicSection";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Education({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.education.items);
  const { handleChange, handleAdd, handleDelete } =
    useDynamicSection(formdata, setformdata, {
      institute: "",
      degree: "",
      marks: "",
      start: "",
      end: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({ ...cvdata, education: { ...cvdata.education, items: formdata } });
  };

  const { toggleSection } = useSectionVisibility(setCvData, "education");;

  return (
    <form
      onSubmit={handleSubmit}
      className={`section education ${!cvdata.education.visible ? "section--hidden" : ""}`}
      id="education-section">
      <div className="section__header">
        <h1 className="section__title">Education</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={toggleSection}
        >
          {cvdata.education.visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {formdata.map((edu, index) => (
        <div className="section__form" key={index}>
          <label>Institute</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter institute name"
            value={edu.institute}
            onChange={(e) =>
              handleChange(index, "institute", e.target.value)
            }
          />

          <label>Degree</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter degree (e.g., B.Tech in CSE)"
            value={edu.degree}
            onChange={(e) =>
              handleChange(index, "degree", e.target.value)
            }
          />

          <label>C.G.P.A.</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter CGPA"
            value={edu.marks}
            onChange={(e) =>
              handleChange(index, "marks", e.target.value)
            }
          />

          <div className="section__row">
            <div>
              <label>Start Year</label>
              <input
                type="number"
                className="input-field"
                placeholder="e.g.,2021"
                value={edu.start}
                min={1900}
                max={2099}
                onChange={(e) =>
                  handleChange(index, "start", e.target.value)
                }
              />
            </div>

            <div>
              <label>End Year</label>
              <input
                type="number"
                className="input-field"
                placeholder="e.g.,2025"
                value={edu.end}
                min={1900}
                max={2099}
                onChange={(e) =>
                  handleChange(index, "end", e.target.value)
                }
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn--danger"
            onClick={() => handleDelete(index)}
            disabled={formdata.length === 1}
          >
            Delete
          </button>
        </div>
      ))}

      <div className="section__actions">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={handleAdd}
        >
          Add
        </button>

        <button type="submit" className="btn btn--primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default Education;