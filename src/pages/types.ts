import { Metafields, Translation, WithRequired } from "../types";

export type Page = {
  id: number;
  formatId: number;
  slug: string;
  title: string;
  description: string|null;
  metafields: Metafields;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialPage = Partial<Omit<Page,'id'|'slug'|'createdAt'|'updatedAt'>>

export type CreatePage = PartialPage & WithRequired<PartialPage,'title'|'formatId'>
export type UpdatePage = PartialPage