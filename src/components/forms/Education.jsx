function Education({ cvdata, setCvData }) {
  const handleChange = (index, field, value) => {
    const updatedEducation = [...cvdata.education];
    updatedEducation[index][field] = value;

    setCvData({
      ...cvdata,
      education: updatedEducation,
    });
  };

  const handleAdd = () => {
    setCvData({
      ...cvdata,
      education: [
        ...cvdata.education,
        {
          institute: "",
          degree: "",
          marks: "",
          start: "",
          end: "",
        },
      ],
    });
  };

  const handleDelete = (index) => {
    if (cvdata.education.length === 1) return;

    const updatedEducation = cvdata.education.filter(
      (_, i) => i !== index
    );
    setCvData({
      ...cvdata,
      education: updatedEducation,
    });
  };

  return (
    <form className="section education" id="education-section">
      <h1 className="section__title">Education</h1>

      {cvdata.education.map((edu, index) => (
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
                type="date"
                className="input-field"
                value={edu.start}
                onChange={(e) =>
                  handleChange(index, "start", e.target.value)
                }
              />
            </div>

            <div>
              <label>End Year</label>
              <input
                type="date"
                className="input-field"
                value={edu.end}
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
              disabled={cvdata.education.length === 1}
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