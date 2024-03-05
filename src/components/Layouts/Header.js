import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedInFalse } from "../../stores/loginSlice";

const HeaderButtons = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.login.value)

  if(isLoggedIn) {
    return(
      <div>
      <Link className="main-nav-item" to="/account">
        <i className="fa fa-user-circle"></i>
        Invité
      </Link>
      <Link className="main-nav-item" to="/login" onClick={() => dispatch(setIsLoggedInFalse())}>
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