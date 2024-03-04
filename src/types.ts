export enum ApiVersion {
  v1 = 'v1.0',
  unstable = 'unstable'
}

export const LATEST_API_VERSION = ApiVersion.v1

export enum RenovatioHeader {
  AccessToken = 'X-Renovatio-Access-Token',
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type Metafield = {
  key:string,
  value:string
}
export type Translation = {
  key:string,
  value:string,
  locale:string
}