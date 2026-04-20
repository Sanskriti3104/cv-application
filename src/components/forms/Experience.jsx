import useDynamicSection from "../../hooks/useDynamicSection";

function Experience({ cvdata, setCvData }) {
  const { handleChange, handleAdd, handleDelete } = useDynamicSection(cvdata, setCvData, "experience", {
    company: "",
    role: "",
    start: "",
    end: "",
    description: "",
  });

  return (
    <form className="section experience" id="experience-section">
      <h1 className="section__title">Experience</h1>

      {cvdata.experience.map((exp, index) => (
        <div className="section__form" key={index}>
          <label htmlFor="exp-company">Company</label>
          <input
            type="text"
            id="exp-company"
            className="input-field"
            value={exp.company}
            onChange={(e) =>
              handleChange(index, "company", e.target.value)
            }
          />

          <label htmlFor="exp-role">Role</label>
          <input
            type="text"
            id="exp-role"
            className="input-field"
            value={exp.role}
            onChange={(e) =>
              handleChange(index, "role", e.target.value)
            }
          />

          <div className="section__row">
            <div>
              <label htmlFor="exp-start">Start Year</label>
              <input
                type="date"
                id="exp-start"
                className="input-field"
                value={exp.start}
                onChange={(e) =>
                  handleChange(index, "start", e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="exp-end">End Year</label>
              <input
                type="date"
                id="exp-end"
                className="input-field"
                value={exp.end}
                onChange={(e) =>
                  handleChange(index, "end", e.target.value)
                }
              />
            </div>
          </div>

          <label htmlFor="exp-description">Description</label>
          <textarea
            id="exp-description"
            rows="5"
            className="input-field"
            value={exp.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value) // ✅ fixed
            }
          ></textarea>
          <button
              type="button"
              className="btn btn--danger"
              onClick={() => handleDelete(index)}
              disabled={cvdata.experience.length === 1}
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

export default Experience;