import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';

const LoginRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRoute;
