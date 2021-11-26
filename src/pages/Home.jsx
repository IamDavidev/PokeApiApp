import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import NoUser from '../components/NoUser';
import ContainerHome from '../components/ContainerHome';
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1> HOME </h1>
      {user.name !== '' ? <ContainerHome user={user} /> : <NoUser />}
    </>
  );
};

export default Home;
