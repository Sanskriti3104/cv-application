import { useState } from "react";
import useDynamicSection from "../../hooks/useDynamicSection";

function Skills({ cvdata, setCvData }) {
  const [formdata,setformdata] = useState(cvdata.skills);
  const { handleChange, handleAdd, handleDelete } = useDynamicSection(formdata, setformdata, {
    category: "",
    skillItems: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({...cvdata, skills: formdata});
  }

  return (
    <form onSubmit={handleSubmit} className="section skills" id="skills-section">
      <h1 className="section__title">Skills</h1>

      {formdata.map((skill, index) => (
        <div className="section__form" key={index}>
          <label>Category</label>
          <input
            type="text"
            className="input-field"
            value={skill.category}
            onChange={(e) =>
              handleChange(index, 'category', e.target.value)
            }
          />

          <label>Skills (comma separated)</label>
          <input
            type="text"
            className="input-field"
            value={skill.skillItems}
            onChange={(e) =>
              handleChange(index, 'skillItems', e.target.value)
            }
          />
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
        <button
          type="submit" className="btn btn--primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Skills;