import InputLogin from '../components/InputLogin';
import { Link } from 'react-router-dom';
import LoginTitle from '../components/LoginTitle';
import UserContext from '../Context/UserContext';
import { useContext, useEffect } from 'react';
import Logout from '../components/Logout.jsx';
import ContainerLogin from '../components/ContainerLogin';
const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="login_page">
      <div className="loger_title">
        <LoginTitle title="app react" />
      </div>
      {!user.isLoggedIn ? <ContainerLogin /> : <Logout />}
    </div>
  );
};

export default Login;
