import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, RestApiModule } from "../model";
import { Pageblock, CreatePageblock, UpdatePageblock, QueryPageblockDto } from "./types";

export default class Pageblocks extends RestApiModule implements RestApiModuleI {
  create(data:CreatePageblock): Promise<Pageblock> {
    return this._call<Pageblock>('post','/pageblocks',data)
  }

  findAll(args:QueryPageblockDto = {}): Promise<PaginatedDto<Pageblock>> {
    return this._call<PaginatedDto<Pageblock>>('get','/pageblocks',queryParams(args))
  } 

  findOne(id:number): Promise<Pageblock|null> {
    return this._call<Pageblock|null>('get',`/pageblocks/${id}`)
  }

  update(id:number,data:UpdatePageblock): Promise<Pageblock> {
    return this._call<Pageblock>('patch',`/pageblocks/${id}`,data)
  }

  remove(id:number): Promise<Pageblock> {
    return this._call<Pageblock>('delete',`/pageblocks/${id}`)
  }
}