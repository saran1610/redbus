import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Header from "../../components/header/Header";
import Landing from "../landing/Landing";
import Login from "../login/Login";
import Home from "../home/Home";
import BusTickets from "../bus_tickets/BusTickets";
import AddBus from "../add_bus/AddBus";

import { Provider, useSelector } from "react-redux";
import { store } from "../../components/redux/store";

const Routing = () => {
  const state = useSelector(({ data }) => data);
  console.log("state", state);

  const isUser = state?.isUserSignedIn;
  const isAdmin = state?.isAdminSignedIn;
  const isRole = state?.logData?.role;

  // console.log(isUser, isAdmin, isRole);

  return (
    <div>
      <BrowserRouter>
        <Header />
        {isUser && isRole === "user" ? (
          <>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/bus_tickets" element={<BusTickets />}></Route>
              <Route
                path="*"
                element={<Navigate to={`/home`}></Navigate>}
              ></Route>
            </Routes>
          </>
        ) : isAdmin && isRole === "admin" ? (
          <Routes>
            <Route path="/add_bus" element={<AddBus />}></Route>
            <Route
              path="*"
              element={<Navigate to={`/add_bus`}></Navigate>}
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

const StateProvider = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default StateProvider;
