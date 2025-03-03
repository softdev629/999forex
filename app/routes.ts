import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about-us", "routes/about-us.tsx"),
  route("/awards", "routes/awards.tsx"),
  route("/contact-us", "routes/contact-us.tsx"),
  route("/faqs", "routes/faqs.tsx"),

  route("/web-application", "routes/web-application.tsx"),
  route("/trading-view-charts", "routes/trading-view-charts.tsx"),
] satisfies RouteConfig;
