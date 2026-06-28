import "./ActivityChart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function ActivityChart({ data }) {
  return (
    <div className="activity-chart">
      <div className="activity-chart__header">
        <div>
          <h3>Activity Overview</h3>
          <p>Security events during the last 7 days</p>
        </div>

        <span className="activity-chart__period">
          Last 7 days
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}