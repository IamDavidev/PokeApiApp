import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import PokemonScreen from '../pages/PokemonScreen';
import Berries from '../pages/Berries';
import Pokemons from '../pages/Pokemons';
import UserPage from '../pages/UserPage';
const AppRoute = () => {


  const history= useHistory()
  return (
    <>
      {/* {
        history.location.pathname !== '/login'  ?<Navbar /> : null
      } */}
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Pokemons" component={Pokemons} />
        <Route exact path="/berries" component={Berries} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/pokemon/:id" component={PokemonScreen} />
        <Route exact path="/logged" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default AppRoute;
