import { ReplayPublisherLike } from "../concurrent.js";
import ReplayPublisher_create from "./ReplayPublisher/__internal__/ReplayPublisher.create.js";
import ReplayPublisher_createRefCounted from "./ReplayPublisher/__internal__/ReplayPublisher.createRefCounted.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface ReplayPublisherrModule {
  create<T>(options?: { readonly replay?: number }): ReplayPublisherLike<T>;
  createRefCounted<T>(options?: {
    readonly replay?: number;
  }): ReplayPublisherLike<T>;
}

export type Signature = ReplayPublisherrModule;

export const create: Signature["create"] = ReplayPublisher_create;
export const createRefCounted: Signature["createRefCounted"] =
  ReplayPublisher_createRefCounted;
