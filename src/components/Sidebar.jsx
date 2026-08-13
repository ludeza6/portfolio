import "./Sidebar.css";
import links from "../data/links"

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar"></div>

        <h2>Lucas De La Cruz</h2>

        <p>Computer Systems Engineering</p>
      </div>

      <nav className="links">
        <a href="#">GitHub</a>

        <a href="#">Resume</a>

        <a href="#">LinkedIn</a>

        <a href="#">Contact</a>
      </nav>

      <div className="clock">
        <p>Time</p>

        <p>Date</p>

        <p>Timezone</p>
      </div>
    </aside>
  );
}