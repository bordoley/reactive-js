declare const ReadonlyArray_toEventSource: <T>(options?: {
    readonly count?: number;
    readonly start?: number;
}) => import("../../functions.js").Function1<readonly T[], import("../../types.js").EventSourceLike<T>>;
export default ReadonlyArray_toEventSource;
