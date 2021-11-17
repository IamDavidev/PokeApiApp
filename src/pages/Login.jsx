import InputLogin from '../components/InputLogin';
import { Link } from 'react-router-dom';
import LoginTitle from '../components/LoginTitle';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';
const Login = () => {
  const {user, setUser} = useContext(UserContext);
  
  return (
    <div className="login_page">
      <div className="loger_title">
      <LoginTitle title="app react"/>
      </div>
      {
        user.name ? 
        <>
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
    </>
      : <h1>Loading...</h1>

      }
    </div>
  );
};

export default Login;
