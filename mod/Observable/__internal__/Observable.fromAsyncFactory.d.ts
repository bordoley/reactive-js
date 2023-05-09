declare const Observable_fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("../../types.js").DeferredObservableLike<T>;
export default Observable_fromAsyncFactory;
