import "./Sidebar.css";
import links from "../data/links"
import { useEffect, useState } from "react";

function Sidebar() {

  const [currentTime, setCurrentTime] = useState(new Date());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar"></div>

        <h2 className="name">Lucas De La Cruz</h2>

        <p className="program">Computer Systems Engineering</p>
      </div>

      <nav className="links">
        {links.map((link) => (
          <a key={link.name} href={link.url}>
            {link.icon} {link.name}
          </a>
        ))}
      </nav>

      <div className="clock">
        <p>
          {currentTime.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>

        <p>{currentTime.toLocaleDateString('en-US', options)}</p>

        <p>{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
      </div>
    </aside>
  );
}

export default Sidebar;