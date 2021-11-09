import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen'
import Navbar from '../components/Navbar'
const LoginRoute = () => {
  return (
    <Routes>
      <Navbar/>
      <Switch>
      <Route path="/login" component={LoginScreen} />
      </Switch>
    </Routes>
  );
};

export default LoginRoute;
