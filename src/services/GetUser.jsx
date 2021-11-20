const GetUser = async ({ id}) => {
  const res = `https://randomuser.me/api/portraits/men/${id}.jpg`;
  return res;
};

export default GetUser;
