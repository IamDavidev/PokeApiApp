import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import NoUser from '../components/NoUser'
const Home = () => {
  const {user, setUser} = useContext(UserContext);
  // console.log(user.name);
  
  return (
    user.name !== '' ?(  
      <div className="container">
    <h1>Welcome {user.name}</h1> 
    <Link className='btn_all' to="/user">Profile</Link>
    <br />
    <btn className='btn_all'  to="/logout">
      hola como estas {user.name}
    </btn>
  </div>
    ) 
    : <NoUser />
  );
};

export default Home;
