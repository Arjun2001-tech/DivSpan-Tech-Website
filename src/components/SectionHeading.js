export default function SectionHeading({ eyebrow, title, highlight, description, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title} <em>{highlight}</em></h2>
    {description && <p>{description}</p>}
  </div>;
}