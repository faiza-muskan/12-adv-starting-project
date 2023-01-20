import { Outlet, useNavigate } from "react-router-dom";
import React from "react";

import MainNavigation from "../components/MainNavigation";

const Roots = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainNavigation />
      <main>
        {navigate.state === "loading" && <p>loading</p>}
        <Outlet />
      </main>
    </>
  );
};

export default Roots;
