import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <h3 className="header__title">SOC Dashboard</h3>

      <div className="header__actions">
        <span className="header__status">
          Status:
          <strong className="header__status-online"> Online</strong>
        </span>
        <div className="header__datetime">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}