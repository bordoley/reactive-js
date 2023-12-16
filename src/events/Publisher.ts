import { PublisherLike } from "../events.js";
import Publisher_create from "./Publisher/__private__/Publisher.create.js";
import Publisher_createRefCounted from "./Publisher/__private__/Publisher.createRefCounted.js";

/**
 * @noInheritDoc
 */
export interface PublisherModule {
  /**
   */
  create<T>(): PublisherLike<T>;

  /**
   */
  createRefCounted<T>(): PublisherLike<T>;
}

export type Signature = PublisherModule;

export const create: Signature["create"] = Publisher_create;
export const createRefCounted: Signature["createRefCounted"] =
  Publisher_createRefCounted;
