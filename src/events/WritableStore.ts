import { WritableStoreLike } from "../events.js";
import { DisposableLike } from "../utils.js";
import WritableStore_create from "./WritableStore/__private__/WritableStore.create.js";

/**
 * @noInheritDoc
 */
export interface WritableStoreModule {
  create<T>(initialValue: T): WritableStoreLike<T> & DisposableLike;
}

export type Signature = WritableStoreModule;

export const create: Signature["create"] = WritableStore_create;
