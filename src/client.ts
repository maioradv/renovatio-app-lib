import axios, { Axios } from "axios";
import { ApiConfigs, RenovatioAppApiConfigs, validateConfigs } from "./config";
import { RenovatioHeader } from "./types";
import Pages from "./pages";
import { IRenovatioAppApi } from "./model";

export default class RenovatioAppApi implements IRenovatioAppApi
{
  protected client:Axios;
  protected configApi:ApiConfigs
  pages:Pages;

  constructor(protected config: RenovatioAppApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()

    this.pages = new Pages(this.client)
  }

  _initClient(): Axios {
    axios.defaults.baseURL = 'http://' + this.configApi.host;
    axios.defaults.headers.common[RenovatioHeader.Authorization] = 'Bearer ';
    axios.defaults.headers.common[RenovatioHeader.ApiVersion] = this.configApi.version
    return axios
  }

  auth() {}
}