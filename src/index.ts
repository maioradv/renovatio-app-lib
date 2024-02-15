import RenovatioAppApi from "./client";
import { RenovatioAppApiConfigs } from "./config";

export * from './types'

export type renovatioAppApiOptions = RenovatioAppApiConfigs

export default function renovatioAppApi(opt:renovatioAppApiOptions): RenovatioAppApi {
  return new RenovatioAppApi(opt)
}