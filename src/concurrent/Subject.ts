import { SubjectLike } from "../concurrent.js";
import Subject_create from "./Subject/__internal__/Subject.create.js";
import Subject_createRefCounted from "./Subject/__internal__/Subject.createRefCounted.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface SubjectModule {
  create<T>(options?: { readonly replay?: number }): SubjectLike<T>;
  createRefCounted<T>(options?: { readonly replay?: number }): SubjectLike<T>;
}

export type Signature = SubjectModule;

export const create: Signature["create"] = Subject_create;
export const createRefCounted: Signature["createRefCounted"] =
  Subject_createRefCounted;
