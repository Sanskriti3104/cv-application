function Experience({ cvdata, setCvData }) {
  return (
    <form className="section experience" id="experience-section">
      <h1 className="section__title">Experience</h1>

      <div className="section__form">
        <label htmlFor="exp-company">Company</label>
        <input type="text" id="exp-company" className="input-field" value={cvdata.experience.company} onChange={(e) => {setCvData({...cvdata, experience: {...cvdata.experience, company: e.target.value}})}}/>

        <label htmlFor="exp-role">Role</label>
        <input type="text" id="exp-role" className="input-field" value={cvdata.experience.role} onChange={(e) => {setCvData({...cvdata, experience: {...cvdata.experience, role: e.target.value}})}}/>

        <div className="section__row">
          <div>
            <label htmlFor="exp-start">Start Year</label>
            <input type="date" id="exp-start" className="input-field" value={cvdata.experience.start} onChange={(e) => {setCvData({...cvdata, experience: {...cvdata.experience, start: e.target.value}})}}/>
          </div>

          <div>
            <label htmlFor="exp-end">End Year</label>
            <input type="date" id="exp-end" className="input-field" value={cvdata.experience.end} onChange={(e) => {setCvData({...cvdata, experience: {...cvdata.experience, end: e.target.value}})}}/>
          </div>
        </div>

        <label htmlFor="exp-description">Description</label>
        <textarea id="exp-description" rows="5" className="input-field" value={cvdata.experience.description} onChange={(e) => {setCvData({...cvdata, experience: {...cvdata.experience, description: e.target.value}})}}></textarea>
      </div>

      <div className="section__actions">
        <button type="button" className="btn btn--secondary">Add</button>
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default Experience;