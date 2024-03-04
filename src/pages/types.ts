import { PaginatedQueryDto } from "../core/dto/pagination";
import { Sorting, SortingDto } from "../core/dto/sorting";
import { Metafield, Translation, WithRequired } from "../types";

export type Page = {
  id: number;
  formatId: number;
  slug: string;
  title: string;
  description: string|null;
  metafields: Metafield[];
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialPage = Partial<Omit<Page,'id'|'slug'|'createdAt'|'updatedAt'>>

export type CreatePage = PartialPage & WithRequired<PartialPage,'title'|'formatId'>
export type UpdatePage = PartialPage

export type SortingPageDto = SortingDto & {
  title?:Sorting,
  formatId?:Sorting
}

export type QueryPageDto = PaginatedQueryDto & {
  sorting?:SortingPageDto
}