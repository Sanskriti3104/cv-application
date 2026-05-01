import { useState } from "react";
import useDynamicSection from "../../hooks/useDynamicSection";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Experience({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.experience.items);
  const [errors, setErrors] = useState([]);

  const { handleChange, handleAdd, handleDelete } = useDynamicSection(formdata, setformdata, {
    company: "",
    role: "",
    start: "",
    end: "",
    description: "",
  });

  const validate = () => {
    const newErrors = formdata.map((exp) => {
      let err = {};

      if (!exp.company.trim()) {
        err.company = "Company is required";
      }

      if (!exp.role.trim()) {
        err.role = "Role is required";
      }

      if (!exp.start) {
        err.start = "Start year required";
      }

      if (exp.start && exp.end && Number(exp.end) < Number(exp.start)) {
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
      experience: { ...cvdata.experience, items: formdata },
    });
  };

  const { toggleSection } = useSectionVisibility(setCvData, "experience");

  return (
    <form
      onSubmit={handleSubmit}
      className={`section experience ${!cvdata.experience.visible ? "section--hidden" : ""
        }`}
      id="experience-section"
    >
      <div className="section__header">
        <h1 className="section__title">Experience</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={toggleSection}
        >
          {cvdata.experience.visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {formdata.map((exp, index) => (
        <div className="section__form" key={index}>
          <label>Company</label>
          <input
            type="text"
            className={`input-field ${errors[index]?.company ? "error-border" : ""}`}
            placeholder="Enter company name"
            value={exp.company}
            onChange={(e) =>
              handleChange(index, "company", e.target.value)
            }
          />
          {errors[index]?.company && <p className="error">{errors[index].company}</p>}

          <label htmlFor="exp-role">Role</label>
          <input
            type="text"
            id="exp-role"
            className={`input-field ${errors[index]?.role ? "error-border" : ""}`}
            placeholder="Enter your role (e.g., Software Intern)"
            value={exp.role}
            onChange={(e) =>
              handleChange(index, "role", e.target.value)
            }
          />
          {errors[index]?.role && <p className="error">{errors[index].role}</p>}

          <div className="section__row">
            <div>
              <label htmlFor="exp-start">Start Year</label>
              <input
                type="number"
                id="exp-start"
                className={`input-field ${errors[index]?.start ? "error-border" : ""}`}
                placeholder="e.g.,2023"
                value={exp.start}
                min={1900}
                max={2099}
                onChange={(e) =>
                  handleChange(index, "start", e.target.value)
                }
              />
              {errors[index]?.start && <p className="error">{errors[index].start}</p>}
            </div>

            <div>
              <label htmlFor="exp-end">End Year</label>
              <input
                type="number"
                id="exp-end"
                className={`input-field ${errors[index]?.end ? "error-border" : ""}`}
                placeholder="e.g.,2024"
                value={exp.end}
                min={1900}
                max={2099}
                onChange={(e) =>
                  handleChange(index, "end", e.target.value)
                }
              />
              {errors[index]?.end && <p className="error">{errors[index].end}</p>}
            </div>
          </div>

          <label htmlFor="exp-description">Description</label>
          <textarea
            id="exp-description"
            rows={5}
            className={`input-field ${errors[index]?.description ? "error-border" : ""}`}
            placeholder="Describe your responsibilities and achievements"
            value={exp.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          ></textarea>
          {errors[index]?.description && <p className="error">{errors[index].description}</p>}

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
          Add Experience
        </button>

        <button type="submit" className="btn btn--primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default Experience;