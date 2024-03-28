import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { RoutesEnum } from "./shared/enums";
import { PublicRoute } from "./shared/components/PublicRoute";
import "./App.css";
import Login from "./app/auth/components/Login";
import Home from "app/home/components";
import { PrivateRoute } from "shared/components/PrivateRoute";

const Orders = lazy(() => import("app/orders/components"));

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={RoutesEnum.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={RoutesEnum.HOME} element={<Home />} />
        <Route path={RoutesEnum.ORDERS} element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
