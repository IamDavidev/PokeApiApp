import { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  // console.log(user.name);
  return <h1>Welcome to the Home page! {user.name}</h1>;
};

export default Home;
