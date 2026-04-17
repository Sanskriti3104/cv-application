function Experience() {
  return (
    <form className="section experience" id="experience-section">
      <h1 className="section__title">Experience</h1>

      <div className="section__form">
        <label htmlFor="exp-company">Company</label>
        <input type="text" id="exp-company" className="input-field" />

        <label htmlFor="exp-role">Role</label>
        <input type="text" id="exp-role" className="input-field" />

        <div className="section__row">
          <div>
            <label htmlFor="exp-start">Start Year</label>
            <input type="date" id="exp-start" className="input-field" />
          </div>

          <div>
            <label htmlFor="exp-end">End Year</label>
            <input type="date" id="exp-end" className="input-field" />
          </div>
        </div>

        <label htmlFor="exp-description">Description</label>
        <textarea id="exp-description" rows="5" className="input-field"></textarea>
      </div>

      <div className="section__actions">
        <button type="button" className="btn btn--secondary">Add</button>
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default Experience;