import LoginTitle from '../components/LoginTitle';
import { Link } from 'react-router-dom';
const SignUp = () => {
  console.log('singup');
  return (
    <div className="singup_page">
      <LoginTitle />
      <div className="singup_page_container">
        <form>
          <input type="text" id="name_signup" placeholder="Name" />
          <input type="email" id="email_signup" placeholder="EMAIL" />
          <input type="password" id="password_signup" placeholder="PASSWORD" />
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
