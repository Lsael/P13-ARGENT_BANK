import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import { setToken } from "../../stores/userSlice";

const HeaderButtons = () => {
  const dispatch = useDispatch()
  const firstName = useSelector((state) => state.user.userDatas.firstName)
  const token = useSelector((state) => state.user.token)

  if(token) {
    return(
      <div>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {firstName}
      </Link>
      <Link className="main-nav-item" to="/" onClick={() => {
        sessionStorage.removeItem("ArgentBank");
        localStorage.removeItem("ArgentBank");
        dispatch(setToken(false))
        }}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
    )
  } else {
    return(
      <div>
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
    )
  }
}

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <HeaderButtons />
      </nav>
    </header>
  );
};

export default Header