import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShieldAlert,
  FileText,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar() {
  const items = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Alerts", icon: ShieldAlert, path: "/alerts" },
    { name: "Logs", icon: FileText, path: "/logs" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">SOC Panel</h2>

      <nav className="sidebar__nav">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? "sidebar__item--active" : ""}`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}