import { useContext, lazy, Suspense } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import Loading from '../components/Loading';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const Navbar = lazy(() => import('../components/Navbar'));
const PokemonScreen = lazy(() => import('../pages/PokemonScreen'));
const Berries = lazy(() => import('../pages/Berries'));
const Pokemons = lazy(() => import('../pages/Pokemons'));
const UserPage = lazy(() => import('../pages/UserPage'));

const AppRoute = () => {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/Pokemons" component={Pokemons} />
        <Route exact path="/berries" component={Berries} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/pokemon/:id" component={PokemonScreen} />
        <Route exact path="/logged" component={Login} />

        {user.isLoggedIn === true ? (
          <Redirect to="/home" />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Suspense>
  );
};

export default AppRoute;
