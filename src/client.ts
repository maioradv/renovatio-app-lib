import axios, { Axios } from "axios";
import { ApiConfigs, RenovatioAppApiConfigs, validateConfigs } from "./config";
import { RenovatioHeader } from "./types";
import Pages from "./pages";
import { IRenovatioAppApi } from "./model";
import Languages from "./languages";

export default class RenovatioAppApi implements IRenovatioAppApi
{
  protected client:Axios;
  protected configApi:ApiConfigs
  pages:Pages;
  languages:Languages;

  constructor(protected config: RenovatioAppApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()

    this.pages = new Pages(this.client)
    this.languages = new Languages(this.client)
  }

  _initClient(): Axios {
    axios.defaults.baseURL = 'http://' + this.configApi.host;
    axios.defaults.headers.common[RenovatioHeader.Authorization] = 'Bearer ';
    axios.defaults.headers.common[RenovatioHeader.ApiVersion] = this.configApi.version
    return axios
  }

  auth() {}
}