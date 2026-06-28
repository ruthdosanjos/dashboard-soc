import "./LogTable.css";

export default function LogTable({ logs }) {
  return (
    <div className="log-table">
      <h3>Event Logs</h3>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.time}</td>
              <td>{log.event}</td>
              <td>{log.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}