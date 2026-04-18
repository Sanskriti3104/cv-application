function ExperiencePreview({ cvdata }) {
  return (
    <div>
        <p>Company: {cvdata.experience.company}</p>
        <p>Role: {cvdata.experience.role}</p>
        <p>Start Year: {cvdata.experience.start}</p>
        <p>End Year: {cvdata.experience.end}</p>
        <p>Description: {cvdata.experience.description}</p>
    </div>
  );
}

export default ExperiencePreview;