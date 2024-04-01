import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./shared/enums";
import { PublicRoute } from "./shared/components/PublicRoute";
import "./App.css";
import Login from "./app/auth/components/Login";
import { PrivateRoute } from "shared/components/PrivateRoute";

const Orders = lazy(() => import("app/orders/components"));

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={RoutesEnum.HOME} element={<Login />} />
        {/* <Route path="*" element={<Navigate to={RoutesEnum.LOGIN} />} /> */}
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={RoutesEnum.ORDERS} element={<Orders />} />
        {/* <Route path="*" element={<Navigate to={RoutesEnum.ORDERS} />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
