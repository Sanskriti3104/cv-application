function ExperiencePreview({ cvdata }) {
  if (!cvdata.experience.visible) return null;
  if (!cvdata.experience.items.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Experience</div>

      {cvdata.experience.items.map((exp, index) => {
        const hasRole = exp.role;
        const hasStart = exp.start;
        const hasEnd = exp.end;

        return (
          <div key={index} className="preview__item">
            <div className="preview__bold">{exp.company}</div>

            {(hasRole || hasStart || hasEnd) && (
              <div className="preview__text">
                {hasRole && exp.role}

                {hasRole && (hasStart || hasEnd) && " | "}

                {(hasStart || hasEnd) &&
                  `${hasStart || ""}${hasStart && hasEnd ? " - " : ""
                  }${hasEnd || ""}`}
              </div>
            )}

            {exp.description && (
              <div>
                {exp.description
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
        );
      })}
    </div>
  );
}

export default ExperiencePreview;