import { useState } from "react";
import useDynamicSection from "../../hooks/useDynamicSection";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Projects({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.projects.items);
  const { handleChange, handleAdd, handleDelete } = useDynamicSection(formdata, setformdata, {
    title: "",
    description: "",
    github: "",
    live: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCvData({ ...cvdata, projects: { ...cvdata.projects, items: formdata } });
  }

  const { toggleSection } = useSectionVisibility(setCvData, "projects");;

  return (
    <form onSubmit={handleSubmit} className="section projects" id="projects-section">
      <div className="section__header">
        <h1 className="section__title">Projects</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={toggleSection}
        >
          {cvdata.projects.visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {formdata.map((project, index) => (
        <div className="section__form" key={index}>
          <label>Project Title</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter project title"
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />

          <label htmlFor="proj-description">Description</label>
          <textarea
            id="proj-description"
            rows={5}
            className="input-field"
            placeholder="Describe the project, technologies used, and your role"
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
            placeholder="Enter GitHub repository URL"
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
            placeholder="Enter live project URL (if available)"
            value={project.live}
            onChange={(e) =>
              handleChange(index, "live", e.target.value)
            }
          />

          <button
            type="button"
            className="btn btn--danger"
            onClick={() => handleDelete(index)}
            disabled={formdata.length === 1}
          >
            Delete
          </button>
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