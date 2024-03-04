import { PaginatedDto } from "../core/dto/pagination";
import { IRestApiModule, ModuleRestApi } from "../model";
import { Page, CreatePage, UpdatePage, QueryPageDto } from "./types";

export default class Pages extends ModuleRestApi implements IRestApiModule {
  create(data:CreatePage): Promise<Page> {
    return this._call<Page>('post','/pages',data)
  }

  findAll(args:QueryPageDto = {}): Promise<PaginatedDto<Page>> {
    return this._call<PaginatedDto<Page>,QueryPageDto>('get','/pages',args)
  } 

  findOne(id:number): Promise<Page|null> {
    return this._call<Page|null>('get',`/pages/${id}`)
  }

  update(id:number,data:UpdatePage): Promise<Page> {
    return this._call<Page>('patch',`/pages/${id}`,data)
  }

  remove(id:number): Promise<Page> {
    return this._call<Page>('delete',`/pages/${id}`)
  }
}