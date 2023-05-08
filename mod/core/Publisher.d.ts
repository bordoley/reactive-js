export declare const create: <T>(options?: {
    readonly replay?: number | undefined;
} | undefined) => import("../core.js").PublisherLike<T>;
export declare const createRefCounted: <T>(options?: {
    readonly replay?: number | undefined;
} | undefined) => import("../core.js").PublisherLike<T>;
