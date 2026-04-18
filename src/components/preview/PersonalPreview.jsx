function PersonalPreview({ cvdata }) {
    return (
        <div>
            <p>Name: {cvdata.personal.name}</p>
            <p>Place: {cvdata.personal.place}</p>
            <p>Email: {cvdata.personal.email}</p>
            <p>Phone: {cvdata.personal.phone}</p>
            <p>LinkedIn: {cvdata.personal.linkedin}</p>
            <p>GitHub: {cvdata.personal.github}</p>
        </div>
    );
}
export default PersonalPreview;