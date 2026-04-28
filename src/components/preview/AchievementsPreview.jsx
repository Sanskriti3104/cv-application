function AchievementsPreview({ cvdata }) {
  if (!cvdata.achievements.visible) return null;

  const description =
    cvdata.achievements.items[0]?.description || "";

  const points = description
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <div className="preview__section">
      <div className="preview__title">
        Achievements & Certifications
      </div>

      {points.map((point, i) => (
        <div key={i} className="preview__item">
          • {point}
        </div>
      ))}
    </div>
  );
}

export default AchievementsPreview;