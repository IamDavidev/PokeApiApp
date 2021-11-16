import UserContext from '../Context/UserContext'

const UserPage = () => {
  const {user,setUser} = useContext(UserContext)
  return (
    <div>
     {
       user ? <h1>{user.name}</h1> : <h1>No user</h1>
     }
    </div>
  );
};


export default UserPage;