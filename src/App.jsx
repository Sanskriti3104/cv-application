import PersonalDetail from "./components/forms/PersonalDetail.jsx";
import ProfessionalSummary from "./components/forms/ProfessionalSummary.jsx";
import Education from "./components/forms/Education.jsx";
import Experience from "./components/forms/Experience.jsx";
import Skills from "./components/forms/Skills.jsx";
import Projects from "./components/forms/Projects.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <PersonalDetail />
        <ProfessionalSummary />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </div>

      <div className="preview-container">
        <h1>Preview</h1>
      </div>
    </div>
  );
}

export default App;