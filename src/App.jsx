import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice.js";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";

const App = () => {
  //loading state
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          // state will always update

          dispatch(logout());
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          Todo: <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
