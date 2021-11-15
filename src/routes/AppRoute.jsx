import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import PokemonScreen from '../pages/PokemonScreen';
import Berries from '../pages/Berries';
import Pokemons from '../pages/Pokemons';
const AppRoute = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Pokemons" component={Pokemons} />
        <Route exact path="/berries" component={Berries} />
        <Route exact path="/user" component={Home} />
        <Route exact path="/pokemon/:id" component={PokemonScreen} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default AppRoute;
