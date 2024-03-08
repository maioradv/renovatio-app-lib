import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, RestApiModule } from "../model";
import { Page, CreatePage, UpdatePage, QueryPageDto } from "./types";

export default class Pages extends RestApiModule implements RestApiModuleI {
  create(data:CreatePage): Promise<Page> {
    return this._call<Page>('post','/pages',data)
  }

  findAll(args:QueryPageDto = {}): Promise<PaginatedDto<Page>> {
    return this._call<PaginatedDto<Page>>('get','/pages',queryParams(args))
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

  graphql() {
    const params = {
      query: `query page($limit: Int){
        pages(limit: $limit){
          nodes {
            id
            slug
            title
          }
          meta {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`,
      variables: {
        limit: undefined,
      }
    }
    return this._call<any>('post',`/graphql`,params)
  }
}