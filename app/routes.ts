import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/nowplaying.tsx"),
    route("terms-and-conditions", "routes/terms.tsx"),
    route("privacy-policy", "routes/privacy.tsx"),
  ]),
] satisfies RouteConfig;
