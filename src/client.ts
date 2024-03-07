import axios, { Axios } from "axios";
import { ApiConfigs, RenovatioAppApiConfigs, validateConfigs } from "./config";
import { RenovatioHeader } from "./types";
import { RenovatioAppApiI } from "./model";
import Pages from "./pages";
import Languages from "./languages";
import Settings from "./settings";
import Formats from "./formats";

export default class RenovatioAppApi implements RenovatioAppApiI
{
  protected client:Axios;
  protected configApi:ApiConfigs
  pages:Pages;
  languages:Languages;
  settings:Settings;
  formats:Formats;

  constructor(protected config: RenovatioAppApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()

    this.pages = new Pages(this.client)
    this.languages = new Languages(this.client)
    this.settings = new Settings(this.client)
    this.formats = new Formats(this.client)
  }

  protected _initClient(): Axios {
    axios.defaults.baseURL = 'http://' + this.configApi.host;
    axios.defaults.headers.common[RenovatioHeader.Authorization] = 'Bearer ';
    axios.defaults.headers.common[RenovatioHeader.ApiVersion] = this.configApi.version
    return axios
  }

  auth() {}
}