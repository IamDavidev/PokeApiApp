import { useContext } from 'react';
import UserContext from '../Context/UserContext'

const UserPage = () => {
  const {user,setUser} = useContext(UserContext)
  // console.log(user);
  return (
    <div>
     {
       
         (user === null) ? <h1>No user</h1>
          : <h1>userk</h1>
        
     }
    </div>
  );
};


export default UserPage;