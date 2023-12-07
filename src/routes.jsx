import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Visitor from "./pages/Visitor";
import Admin from "./pages/Admin";

function Routes({ userRole }) {
  return (
    <ReactRoutes>
      {userRole === "visitor" && (
        <Route path="/" element={<Visitor />} />
      )}
      {userRole === "admin" && <Route path="/admin" element={<Admin />} />}
    </ReactRoutes>
  );
}

export default Routes;

