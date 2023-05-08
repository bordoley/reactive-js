declare const Observable_fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("../../../core.js").DeferredObservableLike<T>;
export default Observable_fromAsyncFactory;
