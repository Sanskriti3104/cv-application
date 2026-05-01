import { useState } from "react";
import useDynamicSection from "../../hooks/useDynamicSection";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Skills({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.skills.items);
  const [errors, setErrors] = useState([]);

  const { handleChange, handleAdd, handleDelete } = useDynamicSection(formdata, setformdata, {
    category: "",
    skillItems: "",
  });

  const { toggleSection } = useSectionVisibility(setCvData, "skills");

  const validate = () => {
    const newErrors = formdata.map((skill) => {
      let err = {};

      if (!skill.category.trim()) {
        err.category = "Category is required";
      }

      if (!skill.skillItems.trim()) {
        err.skillItems = "At least one skill is required";
      } else {
        // remove empty items like ", ,"
        const cleaned = skill.skillItems
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s !== "");

        if (cleaned.length === 0) {
          err.skillItems = "Enter valid skills";
        }
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
      skills: { ...cvdata.skills, items: formdata },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`section skills ${
        !cvdata.skills.visible ? "section--hidden" : ""
      }`}
      id="skills-section"
    >
      <div className="section__header">
        <h1 className="section__title">Skills</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={toggleSection}
        >
          {cvdata.skills.visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {formdata.map((skill, index) => (
        <div className="section__form" key={index}>
          <label>Category</label>
          <input
            type="text"
            className={`input-field ${errors[index]?.category ? "error-border" : ""}`}
            placeholder="Enter category (e.g., Programming Languages, Tools)"
            value={skill.category}
            onChange={(e) =>
              handleChange(index, "category", e.target.value)
            }
          />
          {errors[index]?.category && <p className="error">{errors[index].category}</p>}

          <label>Skills (comma separated)</label>
          <input
            type="text"
            className={`input-field ${errors[index]?.skillItems ? "error-border" : ""}`}
            placeholder="e.g., JavaScript, React, Node.js"
            value={skill.skillItems}
            onChange={(e) =>
              handleChange(index, "skillItems", e.target.value)
            }
          />
          {errors[index]?.skillItems && <p className="error">{errors[index].skillItems}</p>}

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
          Add Skill
        </button>

        <button type="submit" className="btn btn--primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default Skills;