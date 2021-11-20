import LoginTitle from '../components/LoginTitle';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import {useHistory} from 'react-router-dom'
const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const History = useHistory();
  const HandleLogin = (evt) => {
    evt.preventDefault();
    const name = evt.target.elements[0].value;
    const email = evt.target.elements[1].value;
    const password = evt.target.elements[2].value;
    const userProfile = {
      name,
      email,
      password,
      confirmPassword: password,
      isLoggedIn: true,
    };
    setUser(userProfile);
    History.push('/home');
  };
  console.log(user.name);
  return (
    <div className="singup_page">
      <LoginTitle title="sing up" />
      {user.name === '' ? (
        <>
          <div className="signup_page_container">
            <form onSubmit={HandleLogin}>
              <InputLogin id="name" type="text" pholder="NAME" />
              <InputLogin id="email" type="email" pholder="EMAIL" />
              <InputLogin id="password" type="password" pholder="PASSWORD" />
              <button className="btn_login">CREATE ACCOUNT</button>
            </form>
          </div>
          <div className="account_created">
            <Link className="btn_login" to="/logout">
              Login
            </Link>
          </div>
        </>
      ) : (
        <div className="signup_page_container">
          <h1>hola xdxd</h1>
        </div>
      )}
    </div>
  );
};

export default SignUp;
