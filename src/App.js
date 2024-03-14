import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import { getUserProfile } from "./services/fetch";
import { setToken, setUserDatas } from "./stores/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("ArgentBank");
  const tokenState = useSelector((state) => state.user.token)

  if (token) {
    dispatch(setToken(token));
  }

  useEffect(() => {
    getUserProfile(tokenState).then((res) => {
      if(res.status == 200) {
        const datas = {
          firstName: res.body.firstName,
          lastName: res.body.lastName,
          email: res.body.email,
          userId: res.body.id,
        };
        return dispatch(setUserDatas(datas));
      }
    })
  }, [tokenState, dispatch])

  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
