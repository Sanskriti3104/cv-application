function ProjectsPreview({ cvdata }) {
  if (!cvdata.projects.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Projects</div>

      {cvdata.projects.map((project, index) => (
        <div key={index} className="preview__item">
          <div className="preview__bold">{project.title}</div>

          <ul className="preview__list">
            {project.description?.split(".").map((point, i) => (
              point.trim() && <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="preview__text">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}{" "}
            {project.live && (
              <>
                {" | "}
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPreview;