import { IRestApiModule, ModuleRestApi } from "../model";
import { Page, CreatePage, UpdatePage } from "./types";

export default class Pages extends ModuleRestApi implements IRestApiModule {
  create(data:CreatePage): Promise<Page> {
    return this._call<Page>('post','/pages',data)
  }

  findAll(): Promise<Page[]> {
    return this._call<Page[]>('get','/pages')
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