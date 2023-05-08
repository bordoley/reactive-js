declare const Observable_fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("../../../core.js").ObservableLike<T>;
export default Observable_fromAsyncFactory;
