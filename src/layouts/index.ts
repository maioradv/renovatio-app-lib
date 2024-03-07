import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, RestApiModule } from "../model";
import { Layout, CreateLayout, UpdateLayout, QueryLayoutDto } from "./types";

export default class Layouts extends RestApiModule implements RestApiModuleI {
  create(data:CreateLayout): Promise<Layout> {
    return this._call<Layout>('post','/layouts',data)
  }

  findAll(args:QueryLayoutDto = {}): Promise<PaginatedDto<Layout>> {
    return this._call<PaginatedDto<Layout>>('get','/layouts',queryParams(args))
  } 

  findOne(id:number): Promise<Layout|null> {
    return this._call<Layout|null>('get',`/layouts/${id}`)
  }

  update(id:number,data:UpdateLayout): Promise<Layout> {
    return this._call<Layout>('patch',`/layouts/${id}`,data)
  }

  remove(id:number): Promise<Layout> {
    return this._call<Layout>('delete',`/layouts/${id}`)
  }
}