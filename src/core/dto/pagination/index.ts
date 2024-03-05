export type PaginatedQueryDto = {
  page?:number,
  limit?:number
}

export type PaginatedMetaDto = {
  page:number,
  take:number,
  itemCount:number,
  pageCount:number,
  hasPreviousPage:boolean,
  hasNextPage:boolean
}

export type PaginatedDto<T> = {
  data: T[],
  meta: PaginatedMetaDto
}

export function pagination(args:PaginatedQueryDto): Record<string,any> {
  return args
}