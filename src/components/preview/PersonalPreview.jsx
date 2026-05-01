function PersonalPreview({ cvdata }) {
    const p = cvdata.personal;

    return (
        <div className="preview__header">
            <div className="preview__name">
                {p.name || "Your Name"}
            </div>
            <div className="preview__contact">
                {p.place && <span>{p.place} | </span>}
                {p.email && <span>{p.email} | </span>}
                {p.phone && <span>{p.phone} | </span>}
                {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                        GitHub 
                    </a>
                )}{p.github && p.linkedin && " | "}
                {p.linkedin && (
                    <a href={p.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                )}
            </div>
        </div>
    );
}
export default PersonalPreview;