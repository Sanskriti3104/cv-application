function ProfessionalPreview({ cvdata }) {
  if (!cvdata.professionalSummary.visible) return null;

  const ps = cvdata.professionalSummary.text;

  return (
    <div className="preview__section">
      <div className="preview__title">Professional Summary</div>

      <div className="preview__text">{ps}</div>
    </div>
  );
}
export default ProfessionalPreview;