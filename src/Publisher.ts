import Publisher_create from "./Publisher/__internal__/Publisher.create.js";
import Publisher_createRefCounted from "./Publisher/__internal__/Publisher.createRefCounted.js";
import { PublisherLike } from "./types.js";

export interface Signature {
  create<T>(options?: { readonly replay?: number }): PublisherLike<T>;

  createRefCounted<T>(options?: { readonly replay?: number }): PublisherLike<T>;
}

export const create: Signature["create"] = Publisher_create;
export const createRefCounted: Signature["createRefCounted"] =
  Publisher_createRefCounted;
