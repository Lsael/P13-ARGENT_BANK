import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profil = () => {
  const user = useSelector((state) => state.user)

  const handleOpenModal = () => {
    document.querySelector("#edit-modal").showModal()
  }

  const handleCloseModal = () => {
    document.querySelector("#edit-modal").close()
  }

  if(!user.token) {
    return <Navigate to="/login" />;
  } else {
    return (
        <main className="main bg-dark">
        <div className="header">
          <h1 id="profile-username">Welcome back<br />{`${user.userDatas.firstName} ${user.userDatas.lastName}`}</h1>
          <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
          <dialog id="edit-modal">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <span id="close-modal-button" onClick={handleCloseModal}>&#10006;</span>
            <span></span>
            <span htmlFor="firstName-input">New firstname</span>
            <input name="firstName-input" type={"text"} defaultValue={user.userDatas.firstName}></input>
            <span htmlFor="lastName-input">New lastname</span>
            <input name="lastName-input" type={"text"} defaultValue={user.userDatas.lastName}></input>
            <button type="submit">Validate</button>
          </dialog>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
};

export default Profil;
