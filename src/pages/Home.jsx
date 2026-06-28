import "./Home.css";

import MetricCard from "../components/cards/MetricCard";
import AlertCard from "../components/cards/AlertCard";
import LogTable from "../components/cards/LogTable";
import ActivityChart from "../components/charts/ActivityChart";
import {
  ShieldAlert,
  ShieldCheck,
  Activity
} from "lucide-react";

import { metrics, alerts, logs, activityData } from "../services/mock";

export default function Home() {
  return (
    <div className="dashboard">

      <h1>Security Operations Center</h1>

      <p className="dashboard-subtitle">
        Monitor your infrastructure, detect threats and respond to incidents in real time.
      </p>

      {/* METRICS */}
      <div className="dashboard__metrics">
        <MetricCard
          className="metric-card--critical"
          title="Critical Alerts"
          value={metrics.alertsCritical}
          icon={ShieldAlert}
        />

        <MetricCard
          className="metric-card--incident"
          title="Active Incidents"
          value={metrics.incidentsActive}
          icon={Activity}
        />

        <MetricCard
          className="metric-card--status"
          title="System Status"
          value={metrics.systemStatus}
          icon={ShieldCheck}
        />
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