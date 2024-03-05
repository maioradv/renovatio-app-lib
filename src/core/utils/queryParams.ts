import { ClausesDto, DefaultClausesDto, where } from "../dto/clauses"
import { PaginatedQueryDto, pagination } from "../dto/pagination"
import { DefaultSortingDto, SortingDto, sorting } from "../dto/sorting"

export type SortingParamsDto<T extends SortingDto> = T & DefaultSortingDto

export type WhereClausesDto<T extends ClausesDto> = T & DefaultClausesDto

export type QueryParamsDto<T extends SortingDto,H extends ClausesDto> = {
  pagination?:PaginatedQueryDto,
  sorting?:T,
  where?:H
}

export function queryParams<T extends SortingDto,H extends ClausesDto>(args:QueryParamsDto<T,H>): Record<string,any> {
  return {
    ...pagination(args.pagination),
    ...sorting(args.sorting),
    ...where(args.where)
  }
}