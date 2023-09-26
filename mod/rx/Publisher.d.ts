import { PublisherLike } from "../rx.js";
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
export declare const create: Signature["create"];
export declare const createRefCounted: Signature["createRefCounted"];
