import { useState } from "react";

import PersonalDetail from "./components/forms/PersonalDetail.jsx";
import ProfessionalSummary from "./components/forms/ProfessionalSummary.jsx";
import Education from "./components/forms/Education.jsx";
import Experience from "./components/forms/Experience.jsx";
import Skills from "./components/forms/Skills.jsx";
import Projects from "./components/forms/Projects.jsx";
import Achievements from "./components/forms/Achievements.jsx";

import Preview from "./components/preview/Preview.jsx"

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
      marks: "",
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
    }],
    achievements: {
      description: "",
    },
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
        <Achievements cvdata={cvdata} setCvData={setCvData} />
      </div>

      <Preview cvdata = {cvdata} />
    </div>
  );
}

export default App;