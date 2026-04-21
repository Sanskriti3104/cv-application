function EducationPreview({ cvdata }) {
  if (!cvdata.education.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Education</div>

      {cvdata.education.map((edu, index) => {
        const hasMarks = edu.marks;
        const hasStart = edu.start;
        const hasEnd = edu.end;

        return (
          <div key={index} className="preview__item">
            <div className="preview__bold">
              {edu.institute}
            </div>

            <div className="preview__text">
              {edu.degree}
            </div>

            <div className="preview__text">
              {hasMarks && `C.G.P.A: ${edu.marks}`}
              {hasMarks && (hasStart || hasEnd) && " | "}
              {(hasStart || hasEnd) &&
                `${hasStart || ""}${hasStart && hasEnd ? " - " : ""}${hasEnd || ""}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationPreview;