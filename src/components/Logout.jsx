import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { useHistory } from 'react-router-dom';
import StateInitial from '../helpers/StateInitial';
const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const handleLogout = () => {
    // localStorage.removeItem('token');
    // window.location.href = '/';
    setUser(StateInitial);
    history.push('/');
  };

  return(
    <div>
      <h1>Logout</h1>
      <p>You are now logged out</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default Logout;