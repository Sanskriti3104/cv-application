function ExperiencePreview({ cvdata }) {
  return (
    <div>
      {cvdata.experience.map((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company}</p>
          <p>Role: {exp.role}</p>
          <p>Start Year: {exp.start}</p>
          <p>End Year: {exp.end}</p>
          <p>Description: {exp.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;