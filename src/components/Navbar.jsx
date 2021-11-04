import logo from '../logo.svg'
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
              <Link href="#">Mens</Link>
            </li>
            <li>
              <Link href="#">Wonmand</Link>
            </li>
            <li>
              <Link href="#">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;