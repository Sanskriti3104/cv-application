function Skills() {
  return (
    <form className="section skills" id="skills-section">
      <h1 className="section__title">Skills</h1>

      <div className="section__form">
        <label htmlFor="skill-category">Category</label>
        <input type="text" id="skill-category" className="input-field" />

        <label htmlFor="skill-items">Skills (comma separated)</label>
        <input type="text" id="skill-items" className="input-field" />
      </div>

      <div className="section__actions">
        <button type="button" className="btn btn--secondary">Add</button>
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default Skills;