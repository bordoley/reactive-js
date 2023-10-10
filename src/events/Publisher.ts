import { PublisherLike } from "../events.js";
import Publisher_create from "./Publisher/__internal__/Publisher.create.js";
import Publisher_createRefCounted from "./Publisher/__internal__/Publisher.createRefCounted.js";

export interface PublisherModule {
  /**
   * @category Constructor
   */
  create<T>(): PublisherLike<T>;

  /**
   * @category Constructor
   */
  createRefCounted<T>(): PublisherLike<T>;
}

export type Signature = PublisherModule;

export const create: Signature["create"] = Publisher_create;
export const createRefCounted: Signature["createRefCounted"] =
  Publisher_createRefCounted;
