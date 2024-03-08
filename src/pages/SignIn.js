import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import { postLogin } from "../services/fetch.js";
import { setToken } from "../stores/userSlice";

const SignIn = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const hanbleSubmitLogin = async () => {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const response = await postLogin({
      email: username,
      password: password
    });

    if (response.status === 200) {
      sessionStorage.setItem("ArgentBank", response.body.token);
      dispatch(setToken(response.body.token))
    } else {
      document.querySelector(".login-error").style.display = "block"
    }
  };

  if (token) {
    return <Navigate to="/profile" />;
  } else {
    return (
      <div className="login-page">
        <Layout>
          <main className="main bg-dark">
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={() => hanbleSubmitLogin()}>
                  Sign In
                </button>
                <span className="login-error">Incorrect Username or password</span>
              </form>
            </section>
          </main>
        </Layout>
      </div>
    );
  }
};

export default SignIn;
