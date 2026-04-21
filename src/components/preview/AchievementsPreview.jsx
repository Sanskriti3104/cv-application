function AchievementsPreview({ cvdata }) {
    if (!cvdata.achievements.length) return null;

    return (
        <div className="preview__section">
            <div className="preview__title">Achievements & Certifications</div>

            {cvdata.achievements.map((achievement, index) => {
                const points = achievement.description
                    .split("\n")
                    .filter((line) => line.trim() !== "");

                return points.map((point, i) => (
                    <div key={`${index}-${i}`} className="preview__item">
                        • {point}
                    </div>
                ));
            })}
        </div>
    );
}

export default AchievementsPreview;