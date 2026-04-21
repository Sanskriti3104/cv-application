function SkillsPreview({ cvdata }) {
  if (!cvdata.skills.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Skills</div>

      {cvdata.skills.map((skill, index) => {
        const hasCategory = skill.category;
        const hasSkills = skill.skillItems;

        return(
          <div key={index} className="preview__text">
            {hasCategory && <strong>{skill.category}</strong>}
            {hasCategory && hasSkills && ": "}
            {hasSkills && skill.skillItems}
          </div>
        );
      })}
    </div>
  ); 
}

export default SkillsPreview;