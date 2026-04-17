function Projects() {
  return (
    <form className="section projects" id="projects-section">
      <h1 className="section__title">Projects</h1>

      <div className="section__form">
        <label htmlFor="proj-title">Project Title</label>
        <input type="text" id="proj-title" className="input-field" />

        <label htmlFor="proj-description">Description</label>
        <textarea id="proj-description" rows="5" className="input-field"></textarea>

        <label htmlFor="proj-github">GitHub Link</label>
        <input type="url" id="proj-github" className="input-field" />

        <label htmlFor="proj-live">Live Preview</label>
        <input type="url" id="proj-live" className="input-field" />
      </div>

      <div className="section__actions">
        <button type="button" className="btn btn--secondary">Add</button>
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default Projects;