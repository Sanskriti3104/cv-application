import { useState } from "react";

import PersonalDetail from "./components/forms/PersonalDetail.jsx";
import ProfessionalSummary from "./components/forms/ProfessionalSummary.jsx";
import Education from "./components/forms/Education.jsx";
import Experience from "./components/forms/Experience.jsx";
import Skills from "./components/forms/Skills.jsx";
import Projects from "./components/forms/Projects.jsx";

import PersonalPreview from "./components/preview/PersonalPreview";
import ProfessionalPreview from "./components/preview/ProfessionalPreview";
import EducationPreview from "./components/preview/EducationPreview";
import ExperiencePreview from "./components/preview/ExperiencePreview";
import SkillsPreview from "./components/preview/SkillsPreview";
import ProjectsPreview from "./components/preview/ProjectsPreview";

function App() {
  const [cvdata, setCvData] = useState({
    personal: {
      name: "",
      place: "",
      email: "",
      phone: "",
      linkedin: "",
      github: ""
    },
    professionalSummary: "",
    education: [{
      institute: "",
      degree: "",
      start: "",
      end: "",
    },
    ],
    experience: [{
      company: "",
      role: "",
      start: "",
      end: "",
      description: "",
    }],
    skills: [{
      category: "",
      skillItems: "",
    }],
    projects: [{
      title: "",
      description: "",
      github: "",
      live: "",
    }]
  });

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>Form</h1>
        <PersonalDetail cvdata={cvdata} setCvData={setCvData} />
        <ProfessionalSummary cvdata={cvdata} setCvData={setCvData} />
        <Education cvdata={cvdata} setCvData={setCvData} />
        <Experience cvdata={cvdata} setCvData={setCvData} />
        <Skills cvdata={cvdata} setCvData={setCvData} />
        <Projects cvdata={cvdata} setCvData={setCvData} />
      </div>

      <div className="preview-container">
        <h1>Preview</h1>
        <PersonalPreview cvdata={cvdata} />
        <ProfessionalPreview cvdata={cvdata} />
        <EducationPreview cvdata={cvdata} />
        <ExperiencePreview cvdata={cvdata} />
        <SkillsPreview cvdata={cvdata} />
        <ProjectsPreview cvdata={cvdata} />
      </div>
    </div>
  );
}

export default App;