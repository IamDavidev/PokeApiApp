import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: component }) => {
  return <Route component={<component />} />;
};

export default PrivateRoute;
