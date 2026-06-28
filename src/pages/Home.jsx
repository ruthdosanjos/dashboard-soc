import "./Home.css";

import MetricCard from "../components/cards/MetricCard";
import AlertCard from "../components/cards/AlertCard";
import LogTable from "../components/cards/LogTable";
import ActivityChart from "../components/charts/ActivityChart";

import { metrics, alerts, logs, activityData } from "../services/mock";

export default function Home() {
  return (
    <div className="dashboard">
      <h1>Security Operations Center</h1>

      {/* METRICS */}
      <div className="dashboard__metrics">
        <MetricCard title="Critical Alerts" value={metrics.alertsCritical} />
        <MetricCard title="Active Incidents" value={metrics.incidentsActive} />
        <MetricCard title="System Status" value={metrics.systemStatus} />
      </div>

      {/* CHART + ALERTS */}
      <div className="dashboard__middle">
        <ActivityChart data={activityData} />

        <div>
          <h2 style={{ marginBottom: "10px" }}>Alerts</h2>

          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>

      {/* LOGS */}
      <div className="dashboard__logs">
        <h2 style={{ marginBottom: "10px" }}>Event Logs</h2>

        <LogTable logs={logs} />
      </div>
    </div>
  );
}