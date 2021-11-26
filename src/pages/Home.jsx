import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import NoUser from '../components/NoUser';
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1> HOME </h1>
      {user.name !== '' ? (
        <div className="container">
          <h2>Welcome {user.name}</h2>
          <ol>
            <li>
              <Link className="btn_all" to="/user">
                Profile
              </Link>
            </li>
            <li>
              <Link className="btn_all" to="/user">
                Logout
              </Link>
            </li>
            <li>
              <Link className="btn_all" to="/user">
                berries
              </Link>
            </li>
            <li>
              <Link className="btn_all" to="/user">
                Logout
              </Link>
            </li>
          </ol>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default Home;
