import { useEffect, useState } from 'react';
import './App.css';
import UserContext from './Context/UserContext';
import LoginRoute from './routes/LoginRoute';
import StateInitial from './helpers/StateInitial';
import setUserStorage from './helpers/setUserStorage';

function App() {
  const [stateInitial, setStateInitial] = useState(StateInitial);
  useEffect(() => {
    function authUser() {
      const user = JSNON.parse(localStorage.getItem('authUser'));
      if (user) {
        setStateInitial(user);
      }
    }
  });

  return (
    <UserContext.Provider
      value={{ user: stateInitial, setUser: setStateInitial }}
    >
      <div className="APP">
        <LoginRoute />
      </div>
    </UserContext.Provider>
  );
}
export default App;
