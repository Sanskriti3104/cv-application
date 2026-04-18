function EducationPreview({ cvdata }) {
    return (
        <div>
            <p>Institute: {cvdata.education.institute}</p>
            <p>Degree: {cvdata.education.degree}</p>
            <p>Start Year: {cvdata.education.start}</p>
            <p>End Year: {cvdata.education.end}</p>
        </div>
    );
}
export default EducationPreview;