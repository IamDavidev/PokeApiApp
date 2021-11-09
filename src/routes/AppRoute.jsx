import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar'
const AppRoute = () => {
  return (
    <Routes>
      <Navbar />
      <Switch>
        <Route path="/" />
        <Route path="/womand" />
        <Route path="/mens" />
        <Route path="/login" />
        <Route path="/user" />
      </Switch>
    </Routes>
  );
};

export default AppRoute;

