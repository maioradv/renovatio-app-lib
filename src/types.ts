export enum ApiVersion {
  March24 = '2024-03',
  Unstable = 'unstable'
}

export const LATEST_API_VERSION = ApiVersion.March24
export const SUPPORTED_API_VERSIONS = [
  LATEST_API_VERSION,
  ApiVersion.Unstable
]

export enum RenovatioHeader {
  Authorization = 'Authorization',
  ApiVersion = 'X-Api-Version'
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