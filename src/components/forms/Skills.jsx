function Skills({ cvdata, setCvData }) {
  const handleChange = (index, field, value) => {
    const updatedSkills = [...cvdata.skills];
    updatedSkills[index][field] = value;

    setCvData({
      ...cvdata,
      skills: updatedSkills,
    });
  };

  const handleAdd = () => {
    setCvData({
      ...cvdata,
      skills: [
        ...cvdata.skills,
        {
          category: '',
          skillItems: ''
        },
      ],
    });
  };

  return (
    <form className="section skills" id="skills-section">
      <h1 className="section__title">Skills</h1>

      {cvdata.skills.map((skill, index) => (
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