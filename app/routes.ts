import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about-us", "routes/about-us.tsx"),
  route("/awards", "routes/awards.tsx"),
  route("/contact-us", "routes/contact-us.tsx"),
  route("/faqs", "routes/faqs.tsx"),

  route("/web-application", "routes/web-application.tsx"),
  route("/fxero-api", "routes/fxero-api.tsx"),
  route("/trading-instruments", "routes/trading-instruments.tsx"),
  route("/fxero-invest", "routes/fxero-invest.tsx"),
  route("/market-analysis", "routes/market-analysis.tsx"),
  route("/education", "routes/education.tsx"),

  route("/login", "routes/login.tsx"),
  route("/signup", "routes/signup.tsx"),
  route("/forgot-password", "routes/forgot-password.tsx"),
] satisfies RouteConfig;
