import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, RestApiModule } from "../model";
import { Language, CreateLanguage, UpdateLanguage, QueryLanguageDto } from "./types";

export default class Languages extends RestApiModule implements RestApiModuleI {
  create(data:CreateLanguage): Promise<Language> {
    return this._call<Language>('post','/languages',data)
  }

  findAll(args:QueryLanguageDto = {}): Promise<PaginatedDto<Language>> {
    return this._call<PaginatedDto<Language>>('get','/languages',queryParams(args))
  } 

  findOne(id:number): Promise<Language|null> {
    return this._call<Language|null>('get',`/languages/${id}`)
  }

  update(id:number,data:UpdateLanguage): Promise<Language> {
    return this._call<Language>('patch',`/languages/${id}`,data)
  }

  remove(id:number): Promise<Language> {
    return this._call<Language>('delete',`/languages/${id}`)
  }
}