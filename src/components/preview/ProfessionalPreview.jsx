function ProfessionalPreview({ cvdata }) {
    const ps = cvdata.professionalSummary;

    return (
        <div className="preview__section">
            <div className="preview__title">Professional Summary</div>
            <div className="preview__text">{ps}</div>
        </div>
    );
}
export default ProfessionalPreview;