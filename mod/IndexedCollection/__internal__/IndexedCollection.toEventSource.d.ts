declare const IndexedCollection_toEventSource: <T>(options?: {
    readonly count?: number;
    readonly start?: number;
}) => import("../../functions.js").Function1<import("../../types.js").IndexedCollectionLike<T>, import("../../types.js").EventSourceLike<T>>;
export default IndexedCollection_toEventSource;
