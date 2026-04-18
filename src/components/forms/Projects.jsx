function Projects({ cvdata, setCvData }) {
  return (
    <form className="section projects" id="projects-section">
      <h1 className="section__title">Projects</h1>

      <div className="section__form">
        <label htmlFor="proj-title">Project Title</label>
        <input type="text" id="proj-title" className="input-field" value={cvdata.projects.title} onChange={(e) => {setCvData({...cvdata, projects: {...cvdata.projects, title: e.target.value}})}}/>

        <label htmlFor="proj-description">Description</label>
        <textarea id="proj-description" rows="5" className="input-field" value={cvdata.projects.description} onChange={(e) => {setCvData({...cvdata, projects: {...cvdata.projects, description: e.target.value}})}}></textarea>

        <label htmlFor="proj-github">GitHub Link</label>
        <input type="url" id="proj-github" className="input-field" value={cvdata.projects.github} onChange={(e) => {setCvData({...cvdata, projects: {...cvdata.projects, github: e.target.value}})}}/>

        <label htmlFor="proj-live">Live Preview</label>
        <input type="url" id="proj-live" className="input-field" value={cvdata.projects.live} onChange={(e) => {setCvData({...cvdata, projects: {...cvdata.projects, live: e.target.value}})}}/>
      </div>

      <div className="section__actions">
        <button type="button" className="btn btn--secondary">Add</button>
        <button type="submit" className="btn btn--primary">Submit</button>
      </div>
    </form>
  );
}

export default Projects;