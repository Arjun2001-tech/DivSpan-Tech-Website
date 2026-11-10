import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="brand" aria-label="DivSpan Tech home">
      <span className="brand-mark">D<span>S</span></span>
      <span className="brand-copy"><strong>DivSpan <b>Tech</b></strong><small>WEB & SOFTWARE SOLUTIONS</small></span>
    </Link>
  );
}