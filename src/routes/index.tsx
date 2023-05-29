import React from "react";
import { Route, Routes as DomRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => {
  return (
    <DomRoutes>
      <Route path="/" element={<Dashboard />} />
    </DomRoutes>
  );
};

export default Routes;
