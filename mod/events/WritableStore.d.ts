import { WritableStoreLike } from "../events.js";
import { DisposableLike } from "../utils.js";
export interface WritableStoreModule {
    create<T>(initialValue: T): WritableStoreLike<T> & DisposableLike;
}
export type Signature = WritableStoreModule;
export declare const create: Signature["create"];
