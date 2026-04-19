function ProjectsPreview({ cvdata }) {
    return (
        <div>
            {cvdata.projects.map((project, index) => (
                <div key={index}>
                    <p>Project Title: {project.title}</p>
                    <p>Description: {project.description}</p>
                    <p>GitHub: {project.github}</p>
                    <p>Live Preview: {project.live}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ProjectsPreview;