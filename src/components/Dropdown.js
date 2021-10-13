import { Link } from 'react-router-dom';

import './Dropdown.scss';

export default function Dropdown() {
  return (
    <ul className="dropdown">
      <li>
        <Link to="/greeting" className="dropdown-btn">
          인사말
        </Link>
      </li>
      <li>
        <Link to="/guide" className="dropdown-btn">
          이용안내
        </Link>
      </li>
      <li>
        <Link className="dropdown-btn">회원기관</Link>
      </li>
    </ul>
  );
}
