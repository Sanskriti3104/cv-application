import useDynamicSection from "../../hooks/useDynamicSection";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Education({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.education.items);
  const [errors, setErrors] = useState([]);

  const { handleChange, handleAdd, handleDelete } =
    useDynamicSection(formdata, setformdata, {
      institute: "",
      degree: "",
      marks: "",
      start: "",
      end: "",
    });

  const validate = () => {
    const newErrors = formdata.map((edu) => {
      let err = {};

      if (!edu.institute.trim()) {
        err.institute = "Institute is required";
      }

      if (!edu.degree.trim()) {
        err.degree = "Degree is required";
      }

      if (!edu.marks.trim()) {
        err.marks = "CGPA is required";
      } else if (!/^\d+(\.\d+)?$/.test(edu.marks)) {
        err.marks = "Enter a valid number";
      }

      if (!edu.start) {
        err.start = "Start year required";
      }

      if (!edu.end) {
        err.end = "End year required";
      }

      if (edu.start && edu.end && Number(edu.end) < Number(edu.start)) {
        err.end = "End year must be after start year";
      }

      return err;
    });

    setErrors(newErrors);
    return newErrors.every((err) => Object.keys(err).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setCvData({
      ...cvdata,
      education: { ...cvdata.education, items: formdata },
    });
  };

  const { toggleSection } = useSectionVisibility(setCvData, "education");

  return (
    <form
      onSubmit={handleSubmit}
      className={`section education ${!cvdata.education.visible ? "section--hidden" : ""
        }`}
      id="education-section"
    >
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
            className={`input-field ${errors[index]?.institute ? "error-border" : ""}`}
            placeholder="Enter institute name"
            value={edu.institute}
            onChange={(e) =>
              handleChange(index, "institute", e.target.value)
            }
          />
          {errors[index]?.institute && <p className="error">{errors[index].institute}</p>}

          <label>Degree</label>
          <input
            type="text"
            className={`input-field ${errors[index]?.degree ? "error-border" : ""}`}
            placeholder="Enter degree (e.g., B.Tech in CSE)"
            value={edu.degree}
            onChange={(e) =>
              handleChange(index, "degree", e.target.value)
            }
          />
          {errors[index]?.degree && <p className="error">{errors[index].degree}</p>}

          <label>C.G.P.A.</label>
          <input
            type="text"
            className={`input-field ${errors[index]?.marks ? "error-border" : ""}`}
            placeholder="Enter CGPA"
            value={edu.marks}
            onChange={(e) =>
              handleChange(index, "marks", e.target.value)
            }
          />
          {errors[index]?.marks && <p className="error">{errors[index].marks}</p>}

          <div className="section__row">
            <div>
              <label>Start Year</label>
              <input
                type="number"
                className={`input-field ${errors[index]?.start ? "error-border" : ""}`}
                placeholder="e.g.,2021"
                value={edu.start}
                min={1900}
                max={2099}
                onChange={(e) =>
                  handleChange(index, "start", e.target.value)
                }
              />
              {errors[index]?.start && <p className="error">{errors[index].start}</p>}
            </div>

            <div>
              <label>End Year</label>
              <input
                type="number"
                className={`input-field ${errors[index]?.end ? "error-border" : ""}`}
                placeholder="e.g.,2025"
                value={edu.end}
                min={1900}
                max={2099}
                onChange={(e) =>
                  handleChange(index, "end", e.target.value)
                }
              />
              {errors[index]?.end && <p className="error">{errors[index].end}</p>}
            </div>
          </div>

          <button
            type="button"
            className="btn"
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