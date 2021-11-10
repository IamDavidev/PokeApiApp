import { Link } from 'react-router-dom';
import LoginTitle from '../components/LoginTitle';

const LoginScreen = () => {
  return (
    <div className="login_screen">
      <LoginTitle />
      <div className="render_login_container">
        <Link className="btn_login" to="/singup">
          Sing up
        </Link>
        <Link className="btn_login" to="/login">
          Login
        </Link>
      </div>
      <footer>
        <p>
          © 2020 Copyright:{' '}
          <a href="https://github.com/L-David-T">David Lezama</a>
        </p>
      </footer>
    </div>
  );
};

export default LoginScreen;
