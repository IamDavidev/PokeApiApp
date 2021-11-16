import LoginTitle from '../components/LoginTitle';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const HandleLogin = (evt) => {
    evt.preventDefault();
    const name = evt.target.elements[0].value;
    const email = evt.target.elements[1].value;
    const pass = evt.target.elements[2].value;
    const userProfile = {
      name,
      email,
      pass,
    };
    setUser(userProfile);
  };
  console.log(user);
  return (
    <div className="singup_page">
      <LoginTitle title="sing up" />
      {!user ? (
        <>
          <div className="signup_page_container">
            <form onSubmit={HandleLogin}>
              <InputLogin required id="name" type="text" pholder="NAME" />
              <InputLogin required id="email" type="email" pholder="EMAIL" />
              <InputLogin required id="password" type="password" pholder="PASSWORD" />
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
        <h1>hola xdxd</h1>
      )}
    </div>
  );
};

export default SignUp;
