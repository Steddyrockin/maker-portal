import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import MainLayout from "../MainLayout";

const PrivateRoute: FC = () => {
  // TODO User permission logic

  return (
    <MainLayout>
      <Suspense fallback={<LinearProgress />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default PrivateRoute;
