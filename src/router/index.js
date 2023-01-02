import { Events } from "../pages/Events";
import { Login } from "../pages/Login";

export const routes = {
  LOGIN: '/login',
  EVENTS: '/'
}

export const publicRoutes = [
  {
    path: routes.LOGIN,
    Component: Login
  }
];

export const privateRoutes = [
  {
    path: routes.EVENTS,
    Component: Events
  }
];