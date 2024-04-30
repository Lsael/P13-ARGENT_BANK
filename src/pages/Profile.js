import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateUserName } from "../services/fetch";
import { setUserDatas } from "../stores/userSlice";

const Profil = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const firstName = useSelector((state) => state.user.userDatas.firstName);
  const lastName = useSelector((state) => state.user.userDatas.lastName);
  const [modalState, setModalState] = useState(false)
  const [newFirstname, setNewFirstname] = useState('')
  const [newLastname, setNewLastname] = useState('')

  const handleOpenModal = () => {
    setModalState("open");
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  const handleChangeName = () => {
    let datas = {
      firstName: newFirstname.length > 0 ? newFirstname : firstName,
      lastName: newLastname.length > 0 ? newLastname : lastName,
      email: user.userDatas.email,
      userId: user.userDatas.userId,
    };
    dispatch(setUserDatas(datas));

    updateUserName(
      user.token,
      JSON.stringify({
        firstName: newFirstname.length > 0 ? newFirstname : firstName,
        lastName: newLastname.length > 0 ? newLastname : lastName,
      })
    );

    setModalState(false);
  };

  if (!user.token) {
    return <Navigate to="/login" />;
  } else {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1 id="profile-username">
            Welcome back
            <br />
            {`${firstName} ${lastName}`}
          </h1>
          <button className="edit-button" onClick={handleOpenModal}>
            Edit Name
          </button>
          <dialog id="edit-modal" open={modalState}>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <span id="close-modal-button" onClick={handleCloseModal}>
              &#10006;
            </span>
            <span></span>
            <span htmlFor="firstName-input">New firstname</span>
            <input
              name="firstName-input"
              id="firstName-input"
              type={"text"}
              defaultValue={firstName}
              onChange={(e) => setNewFirstname(e.target.value)}
            ></input>
            <span htmlFor="lastName-input">New lastname</span>
            <input
              name="lastName-input"
              id="lastName-input"
              type={"text"}
              defaultValue={lastName}
              onChange={(e) => setNewLastname(e.target.value)}
            ></input>
            <button onClick={handleChangeName}>Validate</button>
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
