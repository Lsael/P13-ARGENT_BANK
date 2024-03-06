import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch } from "react-redux";
import { setIsLoggedInFalse } from "../../stores/loginSlice";

const HeaderButtons = () => {
  const dispatch = useDispatch()
  const storage = JSON.parse(sessionStorage.getItem("ArgentBank"))

  if(storage) {
    return(
      <div>
      <Link className="main-nav-item" to="/account">
        <i className="fa fa-user-circle"></i>
        {storage.firstName}
      </Link>
      <Link className="main-nav-item" to="/login" onClick={() => {
        sessionStorage.removeItem("ArgentBank");
        dispatch(setIsLoggedInFalse())
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
        <Link className="main-nav-logo" to="/home">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <HeaderButtons />
      </nav>
    </header>
  );
};

export default Header