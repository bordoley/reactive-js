declare const Observable_fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("../../../rx.js").ObservableLike<T>;
export default Observable_fromAsyncFactory;
