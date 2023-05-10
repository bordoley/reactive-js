import { EventPublisherLike } from "./types.js";
export interface Signature {
    create<T>(): EventPublisherLike<T>;
    createRefCounted<T>(): EventPublisherLike<T>;
}
export declare const create: Signature["create"];
export declare const createRefCounted: Signature["createRefCounted"];
