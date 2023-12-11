import { PublisherLike } from "../events.js";
export interface PublisherModule {
    /**
     */
    create<T>(): PublisherLike<T>;
    /**
     */
    createRefCounted<T>(): PublisherLike<T>;
}
export type Signature = PublisherModule;
export declare const create: Signature["create"];
export declare const createRefCounted: Signature["createRefCounted"];
