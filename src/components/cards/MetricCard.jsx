import "./MetricCard.css";

export default function MetricCard({ title, value }) {
  return (
    <div className="metric-card">
      <p className="metric-card__title">{title}</p>

      <h2 className="metric-card__value">
        {value}
      </h2>
    </div>
  );
}