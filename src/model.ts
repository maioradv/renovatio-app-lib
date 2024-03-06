import { Axios } from "axios"
import { RestApiError } from "./error"

export class RestApiModule {
  constructor(private client:Axios){}

  async _call<Res,Req = Record<string,any>>(method:CallMethod,path:string,data?:Req): Promise<Res> {
    try {
      const response = await this.client.request({
        method:method,
        url:path,
        data: method !== 'get' ? data ?? null : null,
        params: method === 'get' ? data ?? null : null
      })
      return response.data as Res
    }
    catch(error:any) {
      throw new RestApiError(error)
    }
  }
}

export interface RenovatioAppApiI {
  auth:() => void,
}

export interface RestApiModuleI {
  create:(args:unknown) => Promise<unknown>,
  findAll:(args?:unknown) => Promise<unknown>,
  findOne:(id:number,args?:unknown) => Promise<unknown>,
  update:(id:number,args:unknown) => Promise<unknown>,
  remove:(id:number) => Promise<unknown>,
}

type CallMethod = 'get' | 'post' | 'patch' | 'delete'