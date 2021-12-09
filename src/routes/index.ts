import { IRoutes } from "../interface/routes";
import Home from "../views/home/Home";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import User from "../views/user/User";

export const allRoutes: IRoutes[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
    exact: true,
  },
  {
    path: "/user",
    component: User,
    exact: true,
  },
];
