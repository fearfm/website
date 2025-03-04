import {type RouteConfig, index, layout, route, prefix} from "@react-router/dev/routes";

export default [
  layout('routes/public-pages/layout.tsx', [
    index("routes/public-pages//nowplaying.tsx"),
    route('terms-and-conditions', 'routes/public-pages//terms.tsx'),
    route('privacy-policy', 'routes/public-pages//privacy.tsx'),

  ]),
  route('upload', 'routes/upload.tsx'),
  ...prefix('admin', [
    layout('routes/admin/layout.tsx',[
      route('dashboard', 'routes/admin/dashboard.tsx'),
      route('livesets', 'routes/admin/pages/liveset/index.tsx'),
      route('livesets/add', 'routes/admin/pages/liveset/add.tsx'),
    ])
  ])
] satisfies RouteConfig;
