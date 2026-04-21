function PersonalDetail({ cvdata, setCvData }) {
  return (
    <form className="section personal" id="personal-section">
      <h1 className="section__title">Personal Details</h1>

      <div className="section__form">
        <div className="section__group">
          <label htmlFor="personal-name">Name</label>
          <input type="text" id="personal-name" className="input-field" value={cvdata.personal.name} onChange={(e) => setCvData({ ...cvdata, personal: { ...cvdata.personal, name: e.target.value } })} />

          <label htmlFor="personal-place">Place</label>
          <input type="text" id="personal-place" className="input-field" value={cvdata.personal.place} onChange={(e) => setCvData({ ...cvdata, personal: { ...cvdata.personal, place: e.target.value } })} />

          <label htmlFor="personal-email">Email</label>
          <input type="email" id="personal-email" className="input-field" value={cvdata.personal.email} onChange={(e) => setCvData({ ...cvdata, personal: { ...cvdata.personal, email: e.target.value } })} />

          <label htmlFor="personal-phone">Phone</label>
          <input type="tel" id="personal-phone" className="input-field" value={cvdata.personal.phone} onChange={(e) => { setCvData({ ...cvdata, personal: { ...cvdata.personal, phone: e.target.value } }) }} />
        </div>

        <div className="section__group">
          <h1 className="section__title">Links</h1>

          <label htmlFor="personal-github">GitHub</label>
          <input type="url" id="personal-github" className="input-field" value={cvdata.personal.github} onChange={(e) => setCvData({ ...cvdata, personal: { ...cvdata.personal, github: e.target.value } })} />

          <label htmlFor="personal-linkedin">LinkedIn</label>
          <input type="url" id="personal-linkedin" className="input-field" value={cvdata.personal.linkedin} onChange={(e) => setCvData({ ...cvdata, personal: { ...cvdata.personal, linkedin: e.target.value } })} />
        </div>
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default PersonalDetail;