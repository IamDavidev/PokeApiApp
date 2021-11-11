import logo from '../logo.svg';
import { NavLink, Link, useHistory } from 'react-router-dom';
const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    // localStorage.removeItem('token');
    history.push('/login');
  };
  return (
    <div className="nav">
      <nav className="nav__container">
        <div className="nav__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="container__links">
          <ul className="nav__links">
            <li>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/womand">***</NavLink>
            </li>
            <li>
              <Link to="/login"> Logout</Link>
            </li>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
