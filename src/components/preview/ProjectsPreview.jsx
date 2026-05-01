function ProjectsPreview({ cvdata }) {
  if (!cvdata.projects.visible) return null;
  if (!cvdata.projects.items.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Projects</div>

      {cvdata.projects.items.map((project, index) => (
        <div key={index} className="preview__item">
          <div className="preview__bold">
            <span>{project.title}</span>
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
          {project.description && (
            <div>
              {project.description
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((point, i) => (
                  <div key={i} className="preview__item">
                    • {point}
                  </div>
                ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default ProjectsPreview;