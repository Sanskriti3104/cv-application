function Projects({ cvdata, setCvData }) {
  const handleChange = (index, field, value) => {
    const updatedProjects = [...cvdata.projects];
    updatedProjects[index][field] = value;

    setCvData({
      ...cvdata,
      projects: updatedProjects,
    });
  };

  const handleAdd = () => {
    setCvData({
      ...cvdata,
      projects: [
        ...cvdata.projects,
        {
          title: "",
          description: "",
          github: "",
          live: "",
        },
      ],
    });
  };

  return (
    <form className="section projects" id="projects-section">
      <h1 className="section__title">Projects</h1>

      {cvdata.projects.map((project, index) => (
        <div className="section__form" key={index}>
          <label htmlFor="proj-title">Project Title</label>
          <input
            type="text"
            id="proj-title"
            className="input-field"
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />

          <label htmlFor="proj-description">Description</label>
          <textarea
            id="proj-description"
            rows="5"
            className="input-field"
            value={project.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          ></textarea>

          <label htmlFor="proj-github">GitHub Link</label>
          <input
            type="url"
            id="proj-github"
            className="input-field"
            value={project.github}
            onChange={(e) =>
              handleChange(index, "github", e.target.value)
            }
          />

          <label htmlFor="proj-live">Live Preview</label>
          <input
            type="url"
            id="proj-live"
            className="input-field"
            value={project.live}
            onChange={(e) =>
              handleChange(index, "live", e.target.value)
            }
          />
        </div>
      ))} 

      <div className="section__actions">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={handleAdd}
        >
          Add Project
        </button>
        <button type="submit" className="btn btn--primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Projects;