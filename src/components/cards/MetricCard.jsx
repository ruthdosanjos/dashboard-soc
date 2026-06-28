import "./MetricCard.css";

export default function MetricCard({
  title,
  value,
  icon: Icon,
  className = "",
}) {
  return (
    <div className={`metric-card ${className}`}>
      <div className="metric-card__header">
        <span>{title}</span>
        {Icon && <Icon size={20} />}
      </div>

      <h2 className="metric-card__value">{value}</h2>
    </div>
  );
}