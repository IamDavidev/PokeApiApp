import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import LoginScreen from '../pages/LoginScreen';
import SignUp from '../pages/SingUp';
const LoginRoute = () => {
  return (
    <Routes>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/singup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Routes>
  );
};

export default LoginRoute;
