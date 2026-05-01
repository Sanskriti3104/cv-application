import { useState } from "react";
import useDynamicSection from "../../hooks/useDynamicSection";
import useSectionVisibility from "../../hooks/useSectionVisibility";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Projects({ cvdata, setCvData }) {
  const [formdata, setformdata] = useState(cvdata.projects.items);
  const [errors, setErrors] = useState([]);

  const { handleChange, handleAdd, handleDelete } = useDynamicSection(formdata, setformdata, {
    title: "",
    description: "",
    github: "",
    live: "",
  });

  const { toggleSection } = useSectionVisibility(setCvData, "projects");

  const validate = () => {
    const urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/;

    const newErrors = formdata.map((project) => {
      let err = {};

      if (!project.title.trim()) {
        err.title = "Project title is required";
      }

      if (!project.description.trim()) {
        err.description = "Description is required";
      }

      if (project.github && !urlPattern.test(project.github)) {
        err.github = "Invalid GitHub URL";
      }

      if (project.live && !urlPattern.test(project.live)) {
        err.live = "Invalid Live URL";
      }

      return err;
    });

    setErrors(newErrors);
    return newErrors.every((err) => Object.keys(err).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setCvData({
      ...cvdata,
      projects: { ...cvdata.projects, items: formdata },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`section projects ${
        !cvdata.projects.visible ? "section--hidden" : ""
      }`}
      id="projects-section"
    >
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
            className={`input-field ${errors[index]?.title ? "error-border" : ""}`}
            placeholder="Enter project title"
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />
          {errors[index]?.title && <p className="error">{errors[index].title}</p>}

          <label htmlFor="proj-description">Description</label>
          <textarea
            id="proj-description"
            rows={5}
            className={`input-field ${errors[index]?.description ? "error-border" : ""}`}
            placeholder="Describe the project, technologies used, and your role"
            value={project.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          ></textarea>
          {errors[index]?.description && <p className="error">{errors[index].description}</p>}

          <label htmlFor="proj-github">GitHub Link</label>
          <input
            type="url"
            id="proj-github"
            className={`input-field ${errors[index]?.github ? "error-border" : ""}`}
            placeholder="Enter GitHub repository URL"
            value={project.github}
            onChange={(e) =>
              handleChange(index, "github", e.target.value)
            }
          />
          {errors[index]?.github && <p className="error">{errors[index].github}</p>}

          <label htmlFor="proj-live">Live Preview</label>
          <input
            type="url"
            id="proj-live"
            className={`input-field ${errors[index]?.live ? "error-border" : ""}`}
            placeholder="Enter live project URL (if available)"
            value={project.live}
            onChange={(e) =>
              handleChange(index, "live", e.target.value)
            }
          />
          {errors[index]?.live && <p className="error">{errors[index].live}</p>}

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
          Save
        </button>
      </div>
    </form>
  );
}

export default Projects;