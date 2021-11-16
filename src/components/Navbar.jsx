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
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/pokemons">Pokemons</NavLink>
            <NavLink to="/berries">Berries</NavLink>
            <Link to="/user">USER</Link>
          </div>
          <div className="login_link">
            <NavLink to="/login">LOGIN</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
