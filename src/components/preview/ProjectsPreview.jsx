function ProjectsPreview({cvdata}){
    return(
        <div>
            <p>Project Title: {cvdata.projects.title}</p>
            <p>Description: {cvdata.projects.description}</p>
            <p>GitHub: {cvdata.projects.github}</p>
            <p>Live Preview: {cvdata.projects.live}</p>
        </div>
    );
}

export default ProjectsPreview;