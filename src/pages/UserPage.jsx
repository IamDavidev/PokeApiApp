import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import UserRender from '../components/UserRender';
import NoUser from '../components/NoUser';
const UserPage = () => {
  const { user, setUser } = useContext(UserContext) || 'hola';
  console.log(user);
  return (
    <div>{user.name === '' ? <NoUser /> : <UserRender user={user} />}</div>
  );
};

export default UserPage;
