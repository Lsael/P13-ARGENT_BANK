import { Navigate } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import { getUserProfile, postLogin } from "../services/fetch.js";
import { useSelector } from 'react-redux'

const fakeDatas = {
  email: "tony@stark.com",
  password: "password123",
};

const SignIn = () => {
  const isLoggedIn = useSelector((state) => state.login.value)

  const hanbleSubmitLogin = async (datas) => {
    const response = await postLogin(datas);

    if (response.status === 200) {
      const token = response.body.token
      const userDatas = await getUserProfile(token)
      sessionStorage.setItem("ArgentBank", JSON.stringify({
        token:response.body.token,
        firstName: userDatas.body.firstName
      }));
    } else {
      document.querySelector(".login-error").style.display = "block"
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/account" />;
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
                <button className="sign-in-button" onClick={() => hanbleSubmitLogin(fakeDatas)}>
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
