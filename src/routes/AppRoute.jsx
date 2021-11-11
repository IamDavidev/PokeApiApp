import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
const AppRoute = () => {
  return (
    <>
        <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/nosetodavia" component={Home} />
        <Route exact path="/user" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default AppRoute;