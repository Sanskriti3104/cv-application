function Education() {
  return (
    <form className="section education" id="education-section">
      <h1 className="section__title">Education</h1>

      <div className="section__form">
        <label htmlFor="edu-institute">Institute</label>
        <input type="text" id="edu-institute" className="input-field" />

        <label htmlFor="edu-degree">Degree</label>
        <input type="text" id="edu-degree" className="input-field" />

        <div className="section__row">
          <div>
            <label htmlFor="edu-start">Start Year</label>
            <input type="date" id="edu-start" className="input-field" />
          </div>

          <div>
            <label htmlFor="edu-end">End Year</label>
            <input type="date" id="edu-end" className="input-field" />
          </div>
        </div>
      </div>

      <div className="section__actions">
        <button type="button" className="btn btn--secondary">Add</button>
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default Education;