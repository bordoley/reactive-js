import { PublisherLike } from "./types.js";
export interface Signature {
    create<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
    createRefCounted<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
}
export declare const create: Signature["create"];
export declare const createRefCounted: Signature["createRefCounted"];
