const UserRender = ({ user,src }) => {
  return (
    <>
    <img src={src} alt="user poker api " />
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    
    </>
  );
};



export default UserRender;