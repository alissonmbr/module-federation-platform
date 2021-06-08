import Home from "./Home";
import BundleRender from "./BundleRender";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/bundle/:id/:path(.*)",
    component: BundleRender,
    exact: false,
  },
  {
    path: "/bundle/:id",
    component: BundleRender,
    exact: false,
  },
];

export default routes;
