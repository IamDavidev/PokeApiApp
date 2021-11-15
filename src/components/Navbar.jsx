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
          <div className="pokemons_links">
            <NavLink to="/home">POKEMONS</NavLink>
            <NavLink to="/womand">VALLAS</NavLink>
            <Link to="/login">USER</Link>
          </div>
          <div className="login_link">
            <NavLink to="/user">LOGIN</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
