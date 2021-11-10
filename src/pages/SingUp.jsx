import LoginTitle from '../components/LoginTitle';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';

const SignUp = () => {
  return (
    <div className="singup_page">
      <LoginTitle title='sing up'/>
      <div className="signup_page_container">
        <form>
          <InputLogin type="text" pholder="NAME" />
          <InputLogin type="email" pholder="EMAIL" />
          <InputLogin type="password" pholder="PASSWORD" />
        </form>
      </div>
      <div className='account_created'>
        <Link to="/" className="btn_login">
          create account
        </Link>
        <Link className="btn_login" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
