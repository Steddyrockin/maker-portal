import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const PrivateRoute: FC = () => {
  // TODO User permission logic

  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PrivateRoute;
