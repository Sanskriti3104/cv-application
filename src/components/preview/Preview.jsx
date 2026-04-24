import PersonalPreview from "./PersonalPreview";
import ProfessionalPreview from "./ProfessionalPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import SkillsPreview from "./SkillsPreview";
import ProjectsPreview from "./ProjectsPreview";
import AchievementsPreview from "./AchievementsPreview";

function Preview({ cvdata }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="preview-container">
      
      <div className="preview-topbar">
        <h1 className="preview-heading">Resume Preview</h1>
        <button onClick={handlePrint} className="btn btn--primary">
          Export as PDF
        </button>
      </div>

      <div id="cv-preview" className="preview">
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