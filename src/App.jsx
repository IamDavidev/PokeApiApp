import { useState } from 'react';
import './App.css';
import UserContext from './Context/UserContext';
import LoginRoute from './routes/LoginRoute';
import StateInitial from './helpers/StateInitial';
function App() {
  const [stateInitial, setStateInitial] = useState(StateInitial);
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
