function SkillsPreview({ cvdata }) {
  return (
    <div>
        <p>Category: {cvdata.skills.category}</p>
        <p>Skills: {cvdata.skills.skillItems}</p>
    </div>
  );
}

export default SkillsPreview;