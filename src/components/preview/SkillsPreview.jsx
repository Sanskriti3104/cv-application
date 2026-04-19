function SkillsPreview({ cvdata }) {
  return (
    <div>
      {cvdata.skills.map((skill, index) => (
        <div key={index}>
          <p>Category: {skill.category}</p>
          <p>Skills: {skill.skillItems}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default SkillsPreview;