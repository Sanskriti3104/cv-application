function Education({ cvdata, setCvData }) {
  return (
    <form className="section education" id="education-section">
      <h1 className="section__title">Education</h1>

      <div className="section__form">
        <label htmlFor="edu-institute">Institute</label>
        <input type="text" id="edu-institute" className="input-field" value={cvdata.education.institute} onChange={(e) => setCvData({...cvdata,education:{...cvdata.education,institute:e.target.value}})} />

        <label htmlFor="edu-degree">Degree</label>
        <input type="text" id="edu-degree" className="input-field" value={cvdata.education.degree} onChange={(e) => setCvData({...cvdata,education:{...cvdata.education,degree:e.target.value}})} />

        <div className="section__row">
          <div>
            <label htmlFor="edu-start">Start Year</label>
            <input type="date" id="edu-start" className="input-field" value={cvdata.education.start} onChange={(e) => setCvData({...cvdata,education:{...cvdata.education,start:e.target.value}})} />
          </div>

          <div>
            <label htmlFor="edu-end">End Year</label>
            <input type="date" id="edu-end" className="input-field" value={cvdata.education.end} onChange={(e) => setCvData({...cvdata,education:{...cvdata.education,end:e.target.value}})} />
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