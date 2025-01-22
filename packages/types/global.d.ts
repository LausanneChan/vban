import type { RouteMeta as IRouteMeta } from '@vben-core/typings';

import 'vue-router';

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends IRouteMeta {}
}

export interface VbenAdminProAppConfigRaw {
  // api 请求地址
  VITE_GLOB_API_URL: string;
  VITE_GLOB_PERMISSION_API: string;
  VUE_APP_SSO_LOGIN_URL: string;
  VUE_APP_SSO_URL: string;
  VUE_APP_SYS_TYPE: number;
}

export interface ApplicationConfig {
  apiURL: string;
  permissionApi: string;
}

declare global {
  interface Window {
    _VBEN_ADMIN_PRO_APP_CONF_: VbenAdminProAppConfigRaw;
  }
}
