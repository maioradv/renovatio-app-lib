import { ConfigError } from "./error"
import { ApiVersion, LATEST_API_VERSION, SUPPORTED_API_VERSIONS, WithRequired } from "./types"

export type RenovatioAppApiConfigs = {
  host:string,
  version?:ApiVersion
}

export type ApiConfigs = RenovatioAppApiConfigs & WithRequired<RenovatioAppApiConfigs,'version'>

export function validateConfigs(configs:RenovatioAppApiConfigs): ApiConfigs {
  if(!configs.host) throw new ConfigError(`Missing config param: host`)
  if(configs.version && !SUPPORTED_API_VERSIONS.includes(configs.version)) throw new ConfigError(`Version ${configs.version} is not supported anymore`)

  return {
    ...configs,
    version: configs.version ?? LATEST_API_VERSION
  }
}