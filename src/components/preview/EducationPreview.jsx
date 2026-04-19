function EducationPreview({ cvdata }) {
  return (
    <div>
      {cvdata.education.map((edu, index) => (
        <div key={index}>
          <p>Institute: {edu.institute}</p>
          <p>Degree: {edu.degree}</p>
          <p>Marks: {edu.marks}</p>
          <p>Start Year: {edu.start}</p>
          <p>End Year: {edu.end}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default EducationPreview;