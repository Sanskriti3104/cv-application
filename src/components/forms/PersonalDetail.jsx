import { useState } from 'react';
function PersonalDetail({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.personal);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({ ...cvdata, personal: formdata });
  };

  return (
    <form onSubmit={handleSubmit}className="section personal" id="personal-section">
      <h1 className="section__title">Personal Details</h1>

      <div className="section__form">
        <div className="section__group">
          <label htmlFor="personal-name">Name</label>
          <input type="text" id="personal-name" className="input-field" value={formdata.name} onChange={(e) => setformdata({ ...formdata, name: e.target.value })} />

          <label htmlFor="personal-place">Place</label>
          <input type="text" id="personal-place" className="input-field" value={formdata.place} onChange={(e) => setformdata({ ...formdata, place: e.target.value })} />

          <label htmlFor="personal-email">Email</label>
          <input type="email" id="personal-email" className="input-field" value={formdata.email} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} />

          <label htmlFor="personal-phone">Phone</label>
          <input type="tel" id="personal-phone" className="input-field" value={formdata.phone} onChange={(e) => setformdata({ ...formdata, phone: e.target.value })} />
        </div>

        <div className="section__group">
          <h1 className="section__title">Links</h1>

          <label htmlFor="personal-github">GitHub</label>
          <input type="url" id="personal-github" className="input-field" value={formdata.github} onChange={(e) => setformdata({ ...formdata, github: e.target.value })} />

          <label htmlFor="personal-linkedin">LinkedIn</label>
          <input type="url" id="personal-linkedin" className="input-field" value={formdata.linkedin} onChange={(e) => setformdata({ ...formdata, linkedin: e.target.value })} />
        </div>
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default PersonalDetail;