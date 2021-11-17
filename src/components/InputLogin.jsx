const InputLogin = ({ type, pholder }) => {
  return (
    <>
      <input required type={type} placeholder={pholder} className="input_signup" />
    </>
  );
};

export default InputLogin;
