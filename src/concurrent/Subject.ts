import { SubjectLike } from "../concurrent.js";
import Subject_create from "./Subject/__private__/Subject.create.js";
import Subject_createRefCounted from "./Subject/__private__/Subject.createRefCounted.js";

/**
 * @noInheritDoc
 */
export interface SubjectModule {
  create<T>(options?: { readonly replay?: number }): SubjectLike<T>;
  createRefCounted<T>(options?: { readonly replay?: number }): SubjectLike<T>;
}

export type Signature = SubjectModule;

export const create: Signature["create"] = Subject_create;
export const createRefCounted: Signature["createRefCounted"] =
  Subject_createRefCounted;
