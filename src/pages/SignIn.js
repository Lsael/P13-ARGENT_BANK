import Layout from "../components/Layouts/Layout";
import { submitLoginData } from "../services/data";

const fakeDatas = {
  email: "tony@stark.com",
  password: "password123"
}

const SignIn = () => {
  return (
    <div className="login-page">
      <Layout>
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
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
              <span className="sign-in-button" onClick={() => submitLoginData(fakeDatas)}>
                Sign In
              </span>
            </form>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default SignIn;
