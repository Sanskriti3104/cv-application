function PersonalDetail() {
  return (
    <form className="section personal" id="personal-section">
      <h1 className="section__title">Personal Details</h1>

      <div className="section__form">
        <div className="section__group">
          <label htmlFor="personal-name">Name</label>
          <input type="text" id="personal-name" className="input-field" />

          <label htmlFor="personal-place">Place</label>
          <input type="text" id="personal-place" className="input-field" />

          <label htmlFor="personal-email">Email</label>
          <input type="email" id="personal-email" className="input-field" />

          <label htmlFor="personal-phone">Phone</label>
          <input type="tel" id="personal-phone" className="input-field" />
        </div>

        <div className="section__group">
          <h1 className="section__title">Links</h1>

          <label htmlFor="personal-linkedin">LinkedIn</label>
          <input type="url" id="personal-linkedin" className="input-field" />

          <label htmlFor="personal-github">GitHub</label>
          <input type="url" id="personal-github" className="input-field" />
        </div>
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default PersonalDetail;