import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__content">
        <Header />

        <main className="layout__main">
          <Outlet />
        </main>

        <footer className="footer">
          SOC Dashboard © 2026
        </footer>
      </div>
    </div>
  );
}