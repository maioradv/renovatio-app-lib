import { ConfigError } from "./error"
import { ApiVersion, LATEST_API_VERSION, WithRequired } from "./types"

export type RenovatioAppApiConfigs = {
  host:string,
  version?:ApiVersion
}

export type ApiConfigs = RenovatioAppApiConfigs & WithRequired<RenovatioAppApiConfigs,'version'>

export function validateConfigs(configs:RenovatioAppApiConfigs): ApiConfigs {
  if(!configs.host) throw new ConfigError(`Missing config param: host`)

  return {
    ...configs,
    version: configs.version ?? LATEST_API_VERSION
  }
}