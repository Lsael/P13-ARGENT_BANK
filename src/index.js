import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router.js";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./stores/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
