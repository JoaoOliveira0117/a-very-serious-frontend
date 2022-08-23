import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

type routesType = {
  path: string;
  component: () => JSX.Element;
  isPrivate?: boolean;
  exact?: boolean;
};

const routes: routesType[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
];

export default routes;
