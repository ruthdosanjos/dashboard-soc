import "./AlertCard.css";

export default function AlertCard({ alert }) {
  return (
    <div className={`alert-card alert-card--${alert.severity}`}>
      <div className="alert-card__header">
        <h4>{alert.title}</h4>

        <span className="alert-card__severity">
          {alert.severity.toUpperCase()}
        </span>
      </div>

      <div className="alert-card__footer">
        <span>{alert.source}</span>
        <span>{alert.status}</span>
      </div>
    </div>
  );
}