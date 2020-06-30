import React from "react";
import Login from "./Login";
import Join from "./Join";

const routes = [
  { name: "Sign up", path: "/", exact: true, main: () => <Join/> },
  { name: "Sign in", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;
