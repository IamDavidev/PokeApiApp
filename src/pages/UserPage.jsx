import { useContext, useEffect, useState } from 'react';
import UserContext from '../Context/UserContext';
import UserRender from '../components/UserRender';
import NoUser from '../components/NoUser';
import GetUser from '../services/GetUser';
const UserPage = () => {
  const { user, setUser } = useContext(UserContext) || 'hola';
  const [srcUser, setSrcUser] = useState('');
  useEffect(() => {
    GetUser({ id: 51 }).then((user) => {
      setSrcUser(user);
    });
  });

  return (
    <div>
      <h1> UserPage </h1>
      {user.name === '' ? <NoUser /> : <UserRender user={user} src={srcUser} />}
    </div>
  );
};

export default UserPage;
