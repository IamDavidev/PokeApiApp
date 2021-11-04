import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';

// /loginerror
function LoginRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  );
}


export default LoginRoute;