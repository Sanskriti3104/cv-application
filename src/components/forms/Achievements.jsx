function Achievements({ cvdata, setCvData }) {

    const handleChange = (value) => {
        setCvData({
            ...cvdata,
            achievements: [
                {
                    description: value,
                },
            ],
        });
    };

    return (
        <form className="section achievements" id="achievements-section">
            <h1 className="section__title">Achievements</h1>
            
            <div className="section__form">
                <textarea
                    className="input-field"
                    value={cvdata.achievements[0].description}
                    onChange={(e) => handleChange(e.target.value)}
                    rows={5}
                />
            </div>

            <div className="section__actions">
                <button type="submit" className="btn btn--primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Achievements;