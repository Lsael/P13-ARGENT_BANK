import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUserProfile } from "./services/fetch";
import { setToken, setUserDatas } from "./stores/userSlice";


export const SetGlobalState = async (token) => {
  const dispatch = useDispatch()
  const userProfile = await getUserProfile(token)
  const datas = {
    firstName: userProfile.body.firstName,
    lastName: userProfile.body.lastName,
    email: userProfile.body.email,
    userId: userProfile.body.id
  }
  dispatch(setUserDatas(datas))
  dispatch(setToken(token))
}

const App = () => {
  const token = sessionStorage.getItem("ArgentBank")
  
  if(token) {
    SetGlobalState(token)
  }

  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

export default App;
