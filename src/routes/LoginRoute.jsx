import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import LoginScreen from '../pages/LoginScreen';
import SignUp from '../pages/SingUp';
import AppRoute from './AppRoute';
const LoginRoute = () => {
  return (
    <Routes>
      <AppRoute />
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/singup" component={SignUp} />
        <Route exact path="/logout" component={Login} />
      </Switch>
    </Routes>
  );
};

export default LoginRoute;
