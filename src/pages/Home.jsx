import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  // console.log(user.name);
  return (
    user.name !== '' ? <h1>Welcome {user.name}</h1> : <Link to="/login">Login</Link>
  );
};

export default Home;
