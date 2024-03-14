import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateUserName } from "../services/fetch";
import { setUserDatas } from "../stores/userSlice";

const Profil = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const firstName = useSelector((state) => state.user.userDatas.firstName)
  const lastName = useSelector((state) => state.user.userDatas.lastName)

  const handleOpenModal = () => {
    document.querySelector("#edit-modal").showModal()
  }

  const handleCloseModal = () => {
    document.querySelector("#edit-modal").close()
  }

  const handleChangeName = () => {
    const newFirstName = document.querySelector("#firstName-input").value
    const newLastName = document.querySelector("#lastName-input").value

    if(newFirstName.length == 0 || newLastName.length == 0) {
      return document.querySelector(".error-edit-name-dialog").style.display = "block"
    }

    let datas = {
        firstName: newFirstName,
        lastName: newLastName,
        email: user.userDatas.email,
        userId: user.userDatas.userId,
    }
    dispatch(setUserDatas(datas))

    updateUserName(user.token, JSON.stringify({
      firstName: newFirstName,
      lastName: newLastName
    }))
    
    document.querySelector("#edit-modal").close()
  }

  if(!user.token) {
    return <Navigate to="/login" />;
  } else {
    return (
        <main className="main bg-dark">
        <div className="header">
          <h1 id="profile-username">Welcome back<br />{`${firstName} ${lastName}`}</h1>
          <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
          <dialog id="edit-modal">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <span id="close-modal-button" onClick={handleCloseModal}>&#10006;</span>
            <span></span>
            <span htmlFor="firstName-input">New firstname</span>
            <input name="firstName-input" id="firstName-input" type={"text"} defaultValue={firstName}></input>
            <span htmlFor="lastName-input">New lastname</span>
            <input name="lastName-input" id="lastName-input" type={"text"} defaultValue={lastName}></input>
            <button onClick={handleChangeName}>Validate</button>
            <span className="error-edit-name-dialog">Incorrect informations</span>
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
