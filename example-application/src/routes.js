import { lazy } from "react";

const User = lazy(() => import("./User"));
const UserRegister = lazy(() => import("./UserRegister"));

const APPLICATION_ID = "615";
const PATH_PREFIX = `/bundle/${APPLICATION_ID}`;

const routes = [
  {
    path: `${PATH_PREFIX}/user`,
    component: User,
    exact: true,
  },
  {
    path: `${PATH_PREFIX}/user/register`,
    component: UserRegister,
    exact: true,
  },
];

export default routes;
