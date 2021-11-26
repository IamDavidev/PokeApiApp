import { useEffect, useState } from 'react';
import './App.css';
import UserContext from './Context/UserContext';
import LoginRoute from './routes/LoginRoute';
import StateInitial from './helpers/StateInitial';
import setUserStorage from './helpers/setUserStorage';

function App() {
  const [stateInitial, setStateInitial] = useState(StateInitial);
console.log(stateInitial);
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
