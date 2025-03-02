import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about-us", "routes/about-us.tsx"),
  route("/awards", "routes/awards.tsx"),
] satisfies RouteConfig;
