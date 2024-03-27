import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./shared/enums";
import { PublicRoute } from "./shared/components/PublicRoute";
import "./App.css";
import Login from "./app/auth/components/Login";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={RoutesEnum.HOME} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
