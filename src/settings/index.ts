import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Setting, CreateSetting, UpdateSetting, QuerySettingDto } from "./types";

export default class Settings extends ApiModule implements RestApiModuleI {
  create(data:CreateSetting): Promise<Setting> {
    return this._call<Setting>('post','/settings',data)
  }

  findAll(args:QuerySettingDto = {}): Promise<PaginatedDto<Setting>> {
    return this._call<PaginatedDto<Setting>>('get','/settings',queryParams(args))
  } 

  findOne(id:number): Promise<Setting|null> {
    return this._call<Setting|null>('get',`/settings/${id}`)
  }

  update(id:number,data:UpdateSetting): Promise<Setting> {
    return this._call<Setting>('patch',`/settings/${id}`,data)
  }

  remove(id:number): Promise<Setting> {
    return this._call<Setting>('delete',`/settings/${id}`)
  }
}