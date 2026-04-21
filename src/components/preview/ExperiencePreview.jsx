function ExperiencePreview({ cvdata }) {
  if (!cvdata.experience.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Experience</div>

      {cvdata.experience.map((exp, index) => {
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
                  `${hasStart || ""}${
                    hasStart && hasEnd ? " - " : ""
                  }${hasEnd || ""}`}
              </div>
            )}

            {exp.description && (
              <ul className="preview__list">
                {exp.description.split(".").map((point, i) =>
                  point.trim() ? (
                    <li key={i}>{point.trim()}.</li>
                  ) : null
                )}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ExperiencePreview;