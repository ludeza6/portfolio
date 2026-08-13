import "./Sidebar.css";
import links from "../data/links"

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar"></div>

        <h2 className="name">Lucas De La Cruz</h2>

        <p className="program">Computer Systems Engineering</p>
      </div>

      <nav className="links">
        {
          links.map((link) => (
            <a key={link.name} href={link.url}>
              {link.icon} {link.name}
            </a>
          ))
        }
      </nav>

      <div className="clock">
        <p>Time</p>

        <p>Date</p>

        <p>Timezone</p>
      </div>
    </aside>
  );
}

export default Sidebar;