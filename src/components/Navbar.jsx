import logo from '../logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
      <nav className="nav__container">
        <div className="nav__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container__links">
          <ul className="nav__links">
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/womand">Womand</Link>
            </li>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
