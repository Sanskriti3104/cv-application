import { useState, useEffect } from "react";

import PersonalDetail from "./components/forms/PersonalDetail.jsx";
import ProfessionalSummary from "./components/forms/ProfessionalSummary.jsx";
import Education from "./components/forms/Education.jsx";
import Experience from "./components/forms/Experience.jsx";
import Skills from "./components/forms/Skills.jsx";
import Projects from "./components/forms/Projects.jsx";
import Achievements from "./components/forms/Achievements.jsx";

import Preview from "./components/preview/Preview.jsx";

function App() {
  const defaultData = {
    personal: {
      name: "",
      place: "",
      email: "",
      phone: "",
      linkedin: "",
      github: ""
    },
    professionalSummary: {
      visible: true,
      text: ""
    },
    education: {
      visible: true,
      items: [{
        institute: "",
        degree: "",
        marks: "",
        start: "",
        end: "",
      }]
    },
    experience: {
      visible: true,
      items: [{
        company: "",
        role: "",
        start: "",
        end: "",
        description: "",
      }]
    },
    projects: {
      visible: true,
      items: [{
        title: "",
        description: "",
        github: "",
        live: "",
      }],
    },
    skills: {
      visible: true,
      items: [{
        category: "",
        skillItems: "",
      }],
    },
    achievements: {
      visible: true,
      items: [{
        description: "",
      }],
    },
  };

  const [cvdata, setCvData] = useState(() => {
    try {
      const savedData = localStorage.getItem("cvdata");
      return savedData ? JSON.parse(savedData) : defaultData;
    } catch {
      localStorage.removeItem("cvdata"); // clear bad data
      return defaultData;
    }
  });

  useEffect(() => {
    localStorage.setItem("cvdata", JSON.stringify(cvdata));
  }, [cvdata]);

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>Form</h1>
        <PersonalDetail cvdata={cvdata} setCvData={setCvData} />
        <ProfessionalSummary cvdata={cvdata} setCvData={setCvData} />
        <Education cvdata={cvdata} setCvData={setCvData} />
        <Experience cvdata={cvdata} setCvData={setCvData} />
        <Projects cvdata={cvdata} setCvData={setCvData} />
        <Skills cvdata={cvdata} setCvData={setCvData} />
        <Achievements cvdata={cvdata} setCvData={setCvData} />
      </div>

      <Preview cvdata={cvdata} />
    </div>
  );
}

export default App;