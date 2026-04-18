function ProfessionalSummary({ cvdata, setCvData }) {
  return (
    <form className="section summary" id="summary-section">
      <h1 className="section__title">Professional Summary</h1>

      <div className="section__form">
        <label htmlFor="summary-text">Summary</label>
        <textarea
          id="summary-text"
          rows="5"
          className="input-field"
          value={cvdata.professionalSummary}
          onChange={(e) =>
            setCvData({
              ...cvdata,
              professionalSummary: e.target.value,
            })
          }
        ></textarea>
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ProfessionalSummary;