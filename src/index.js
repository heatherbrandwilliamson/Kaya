import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { CartProvider } from "./contexts/cart.context";

import { store } from "./store/store";

import Root from "./routes/root/Root";
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import Collection from "./routes/collection/collection";
import Checkout from "./routes/checkout/Checkout";
import Category from "./components/category/Category";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/collections",
        element: <Collection />,
      },
      {
        path: "/collections/:category",
        element: <Category />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      ,
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
