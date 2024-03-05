export type NumberClause = number | number[] | undefined
export type StringClause = string | string[] | undefined
export type DateClause = number | string | Date | undefined

export type ClausesDto = Record<string,NumberClause|StringClause|DateClause>

export type DefaultClausesDto = {
  id?:NumberClause,
  createdAt?:DateClause,
  updateAt?:DateClause,
  minCreatedAt?:DateClause,
  maxCreatedAt?:DateClause,
  minUpdatedAt?:DateClause,
  maxUpdatedAt?:DateClause,
}

export function where(args:ClausesDto): Record<string,any> {
  const res = {}
  Object.keys(args).forEach(function(key) {
    res[key] = args[key] instanceof Array ? (args[key] as Array<any>).join() : args[key]
  });
  return res;
}