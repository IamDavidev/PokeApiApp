import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen'
const LoginRoute = () => {
  return (
    <Routes>
      <Switch>
      <Route path="/login" component={LoginScreen} />
      </Switch>
    </Routes>
  );
};

export default LoginRoute;
