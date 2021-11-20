const UserRender = ({ user,src }) => {
  return (
    <>
    <img src={src} alt="user poker api " />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    
    </>
  );
};



export default UserRender;