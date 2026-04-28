function SkillsPreview({ cvdata }) {
  if (!cvdata.skills.visible) return null;
  if (!cvdata.skills.items.length) return null;

  return (
    <div className="preview__section">
      <div className="preview__title">Skills</div>

      {cvdata.skills.items.map((skill, index) => {
        const hasCategory = skill.category;
        const hasSkills = skill.skillItems;

        return (
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