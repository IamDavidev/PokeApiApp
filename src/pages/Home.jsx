import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import NoUser from '../components/NoUser';
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user.name);

  return (
    <>
    <h1> HOME </h1>
      {user.name !== '' ? (
        <div className="container">
          <h2>Welcome {user.name}</h2>
          <Link className="btn_all" to="/user">
            Profile
          </Link>
          <br />
          <btn className="btn_all" to="/logout">
            hola como estas {user.name}
          </btn>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default Home;
