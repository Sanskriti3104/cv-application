import { useState } from 'react';

function PersonalDetail({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.personal);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formdata.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formdata.place.trim()) {
      newErrors.place = "Place is required";
    }

    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formdata.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formdata.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    const urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/;

    if (formdata.github && !urlPattern.test(formdata.github)) {
      newErrors.github = "Invalid GitHub URL";
    }

    if (formdata.linkedin && !urlPattern.test(formdata.linkedin)) {
      newErrors.linkedin = "Invalid LinkedIn URL";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setCvData({ ...cvdata, personal: formdata });
  };

  return (
    <form onSubmit={handleSubmit} className="section personal" id="personal-section">
      <h1 className="section__title">Personal Details</h1>

      <div className="section__form">
        <div className="section__group">
          <label htmlFor="personal-name">Name</label>
          <input
            type="text"
            id="personal-name"
            className={`input-field ${errors.name ? "error-border" : ""}`}
            placeholder="Enter your full name"
            value={formdata.name}
            onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="personal-place">Place</label>
          <input
            type="text"
            id="personal-place"
            className={`input-field ${errors.place ? "error-border" : ""}`}
            placeholder="Enter your location (e.g., Delhi, India)"
            value={formdata.place}
            onChange={(e) => setformdata({ ...formdata, place: e.target.value })}
          />
          {errors.place && <p className="error">{errors.place}</p>}

          <label htmlFor="personal-email">Email</label>
          <input
            type="email"
            id="personal-email"
            className={`input-field ${errors.email ? "error-border" : ""}`}
            placeholder="Enter your email address"
            value={formdata.email}
            onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="personal-phone">Phone</label>
          <input
            type="tel"
            id="personal-phone"
            className={`input-field ${errors.phone ? "error-border" : ""}`}
            placeholder="Enter your phone number"
            value={formdata.phone}
            onChange={(e) => setformdata({ ...formdata, phone: e.target.value })}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="section__group">
          <h1 className="section__title">Links</h1>

          <label htmlFor="personal-github">GitHub</label>
          <input
            type="url"
            id="personal-github"
            className={`input-field ${errors.github ? "error-border" : ""}`}
            placeholder="Enter GitHub profile URL"
            value={formdata.github}
            onChange={(e) => setformdata({ ...formdata, github: e.target.value })}
          />
          {errors.github && <p className="error">{errors.github}</p>}

          <label htmlFor="personal-linkedin">LinkedIn</label>
          <input
            type="url"
            id="personal-linkedin"
            className={`input-field ${errors.linkedin ? "error-border" : ""}`}
            placeholder="Enter LinkedIn profile URL"
            value={formdata.linkedin}
            onChange={(e) => setformdata({ ...formdata, linkedin: e.target.value })}
          />
          {errors.linkedin && <p className="error">{errors.linkedin}</p>}
        </div>
      </div>

      <div className="section__actions">
        <button type="submit" className="btn btn--primary">Save</button>
      </div>
    </form>
  );
}

export default PersonalDetail;