import InputLogin from '../components/InputLogin';
import { Link, useHistory } from 'react-router-dom';
import LoginTitle from '../components/LoginTitle';
const Login = () => {
  // const history = useHistory();
  // const handleLogin = () => {
  //   history.push('/home');
  // };
  return (
    <div className="login_page">
      <div className="loger_title">
      <LoginTitle title="app react"/>
      </div>
      <div className="login_container">
        <InputLogin type="email" pholder="EMAIL" />
        <InputLogin type="password" pholder="PASSWORD" />
      </div>
      <div className="login_create">
        <Link to='/home' className="btn_login">
          LOGIN
        </Link>
        <Link to="/singup" className="btn_login">
          CREATE ACCOUNT
        </Link>
      </div>
    </div>
  );
};

export default Login;
