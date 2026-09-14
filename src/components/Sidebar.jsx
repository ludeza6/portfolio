import { useEffect, useState } from 'react';
import links from '../data/links';
import { Avatar } from './PixelArt';
import './Sidebar.css';
export default function Sidebar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const zone = new Intl.DateTimeFormat('en-US', {
    timeZoneName: 'short'
  }).formatToParts(now).find(part => part.type === 'timeZoneName').value;
  const offset = -now.getTimezoneOffset();
  const utc = `UTC${offset >= 0 ? '+' : '−'}${Math.floor(Math.abs(offset) / 60)}${Math.abs(offset) % 60 ? ':' + String(Math.abs(offset) % 60).padStart(2, '0') : ''}`;
  return <aside className="sidebar"><a className="skip-link" href="#main-content">Skip to world</a><div className="profile"><h2 className="name">LUCAS<span>DE LA CRUZ</span></h2><p className="program">COMPUTER SYSTEMS<br />ENGINEERING STUDENT</p><div className="avatar-platform"><Avatar /></div></div><nav className="links" aria-label="Connect"><p className="connect-label">CONNECT</p>{links.map(link => <a key={link.name} href={link.url} aria-label={link.label || link.name} title={link.label || link.name} {...link.url.startsWith('https:') ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      } : {}}><span className={`link-icon icon-${link.name.toLowerCase()}`} aria-hidden="true">{link.icon}</span><span>{link.name}</span></a>)}</nav><dl className="clock"><div><dt>TIME</dt><dd><time dateTime={now.toISOString()}>{now.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            })}</time></dd></div><div><dt>DATE</dt><dd>{now.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}</dd></div><div><dt>TIMEZONE</dt><dd>{zone} ({utc})</dd></div></dl><div className="sidebar-footer" aria-hidden="true">✦ &nbsp; READY TO EXPLORE</div></aside>;
}
