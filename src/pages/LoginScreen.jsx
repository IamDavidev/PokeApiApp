import { Link } from 'react-router-dom';
import LoginTitle from '../components/LoginTitle';

const LoginScreen = () => {
  return (
    <div className="login_screen">
      <LoginTitle title='Login'  />
      <div className="render_login_container">
        <Link className="btn_login" to="/singup">
          Sign up
        </Link>
        <Link className="btn_login" to="/logged">
          Login
        </Link>
      </div>
      <div className='footer_login'>
        <p>
          © 2020 Copyright:{' '}
          <a href="https://github.com/L-Davidev" target='_blanck'>David Lezama</a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
