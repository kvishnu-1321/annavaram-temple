import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Donations from "../Pages/Donations";
import MediaRoom from "../Pages/MediaRoom";
import OnlineBooking from "../Pages/OnlineBooking";
import Sevas from "../Pages/Sevas.js";
import Support from "../Pages/Support";
import routMapMini from "./Routemapmini";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Home from "../Pages/Home";


const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routMapMini.AboutPage} element={<About />} />
      <Route path={routMapMini.DonationPage} element={<Donations />} />
      <Route path={routMapMini.MediaRoomPage} element={<MediaRoom />} />
      <Route path={routMapMini.SevasPage} element={<Sevas />} />
      <Route path={routMapMini.OnlineBookingPage} element={<OnlineBooking />} />
      <Route path={routMapMini.SupportPage} element={<Support />} />
      <Route path={routMapMini.SignUpPage} element={<Signup />} />
      <Route path={routMapMini.SignInPage} element={<Login />} />
    </Routes>
  );
};

export default RouterList;
