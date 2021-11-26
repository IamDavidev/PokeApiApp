import { Link } from "react-router-dom";
import InputLogin from "./InputLogin";

const ContainerLogin = ()=>{

    return (
        <>
        <div className="login_container">
          <InputLogin type="email" pholder="EMAIL" />
          <InputLogin type="password" pholder="PASSWORD" />
        </div>
        <div className="login_create">
          <Link to='/login' className="btn_login">
            LOGIN
          </Link>
          <Link to="/singup" className="btn_login">
            CREATE ACCOUNT
          </Link>
        </div> 
      </>
    )
}


export default ContainerLogin; 