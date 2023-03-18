declare const Observable_fromAsyncFactory: <T>(f: (...args: any[]) => Promise<T>, ...args: unknown[]) => import("../../../rx.js").ObservableLike<T>;
export default Observable_fromAsyncFactory;
