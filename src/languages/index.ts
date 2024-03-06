import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { IRestApiModule, ModuleRestApi } from "../model";
import { Language, CreateLanguage, UpdateLanguage, QueryLanguageDto } from "./types";

export default class Languages extends ModuleRestApi implements IRestApiModule {
  create(data:CreateLanguage): Promise<Language> {
    return this._call<Language>('post','/pages',data)
  }

  findAll(args:QueryLanguageDto = {}): Promise<PaginatedDto<Language>> {
    return this._call<PaginatedDto<Language>>('get','/pages',queryParams(args))
  } 

  findOne(id:number): Promise<Language|null> {
    return this._call<Language|null>('get',`/pages/${id}`)
  }

  update(id:number,data:UpdateLanguage): Promise<Language> {
    return this._call<Language>('patch',`/pages/${id}`,data)
  }

  remove(id:number): Promise<Language> {
    return this._call<Language>('delete',`/pages/${id}`)
  }
}