import { useContext } from 'react';
import UserContext from '../Context/UserContext';



const handleLogin = ({ evt,setUser,History }) => {
    
  const name = evt.target.elements[0].value;
  const email = evt.target.elements[1].value;
  const password = evt.target.elements[2].value;
  const userProfile = {
    name,
    email,
    password,
    isLoggedIn: true,
  };
  localStorage.setItem("AuthUser",JSON.stringify(userProfile))
  setUser(userProfile);
  History.push('/home');
};

export default handleLogin;
