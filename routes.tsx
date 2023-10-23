import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import Account from "./src/pages/Account";
import NotFound from "./src/pages/NotFound";
import { UserContext } from "./ApiContext";

export const MainRoutes = () => {
  const { isAuth } = React.useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={!isAuth() ? <Home /> : <Account />} />
      <Route path="/account/:userId" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
