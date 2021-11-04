const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="login-screen-header">
        <h1>Login</h1>
      </div>
      <div className="login-screen-body">
        <div className="login-screen-body-form">
          <div className="login-screen-body-form-input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-screen-body-form-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-screen-body-form-button">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
