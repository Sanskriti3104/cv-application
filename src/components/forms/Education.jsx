import useDynamicSection from "../../hooks/useDynamicSection";
import { useState } from "react";

function Education({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.education);

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
    setCvData({ ...cvdata, education: formdata });
  };

  return (
    <form onSubmit={handleSubmit} className="section education" id="education-section">
      <h1 className="section__title">Education</h1>

      {formdata.map((edu, index) => (
        <div className="section__form" key={index}>
          <label>Institute</label>
          <input
            type="text"
            className="input-field"
            value={edu.institute}
            onChange={(e) =>
              handleChange(index, "institute", e.target.value)
            }
          />

          <label>Degree</label>
          <input
            type="text"
            className="input-field"
            value={edu.degree}
            onChange={(e) =>
              handleChange(index, "degree", e.target.value)
            }
          />

          <label>Marks</label>
          <input
            type="text"
            className="input-field"
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
          Submit
        </button>
      </div>
    </form>
  );
}

export default Education;