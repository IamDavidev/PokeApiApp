import { useState } from 'react';
import './App.css';
import UserContext from './Context/UserContext';
import LoginRoute from './routes/LoginRoute';
// import AppRoute from './routes/AppRoute'
function App() {
  const [stateInitial, setStateInitial] = useState(null);
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
