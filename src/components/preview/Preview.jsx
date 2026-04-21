import PersonalPreview from "./PersonalPreview";
import ProfessionalPreview from "./ProfessionalPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import SkillsPreview from "./SkillsPreview";
import ProjectsPreview from "./ProjectsPreview";
import AchievementsPreview from "./AchievementsPreview";

function Preview({ cvdata }) {
  return (
    <div className="preview-container">
      <h1 style={{ marginBottom: "10px", color: "#334155" }}>
        Resume Preview
      </h1>

      <div className="preview">
        <PersonalPreview cvdata={cvdata} />
        <ProfessionalPreview cvdata={cvdata} />
        <EducationPreview cvdata={cvdata} />
        <ExperiencePreview cvdata={cvdata} />
        <SkillsPreview cvdata={cvdata} />
        <ProjectsPreview cvdata={cvdata} />
        <AchievementsPreview cvdata={cvdata} />
      </div>
    </div>
  );
}

export default Preview;