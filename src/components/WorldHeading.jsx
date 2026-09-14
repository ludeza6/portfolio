export default function WorldHeading({
  number,
  title,
  children
}) {
  return <header className="world-heading"><p className="eyebrow">WORLD {number.toString().padStart(2, '0')}</p><h1>{title}</h1><p>{children}</p></header>;
}
