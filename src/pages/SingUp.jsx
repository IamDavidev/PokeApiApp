import LoginTitle from '../components/LoginTitle';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin'


const SignUp = () => {
  return (
    <div className="singup_page">
      <LoginTitle />
      <div className="singup_page_container">
        <form>
         <InputLogin type='text' pholder="NAME"/>
          <InputLogin type="email"  pholder="EMAIL" />
          <InputLogin type="password"  pholder="PASSWORD" />
        </form>
      </div>
      <div>
        <button className="create_signup">create account</button>
        <Link className="login_singup" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
