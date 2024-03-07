import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, RestApiModule } from "../model";
import { Format, CreateFormat, UpdateFormat, QueryFormatDto } from "./types";

export default class Formats extends RestApiModule implements RestApiModuleI {
  create(data:CreateFormat): Promise<Format> {
    return this._call<Format>('post','/formats',data)
  }

  findAll(args:QueryFormatDto = {}): Promise<PaginatedDto<Format>> {
    return this._call<PaginatedDto<Format>>('get','/formats',queryParams(args))
  } 

  findOne(id:number): Promise<Format|null> {
    return this._call<Format|null>('get',`/formats/${id}`)
  }

  update(id:number,data:UpdateFormat): Promise<Format> {
    return this._call<Format>('patch',`/formats/${id}`,data)
  }

  remove(id:number): Promise<Format> {
    return this._call<Format>('delete',`/formats/${id}`)
  }
}