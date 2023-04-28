import { DisposableLike } from "../util.js";
export declare const add: <T extends DisposableLike>(child: DisposableLike, options?: {
    readonly ignoreChildErrors?: boolean | undefined;
} | undefined) => (parent: T) => T;
export declare const addTo: <T extends DisposableLike>(parent: DisposableLike, options?: {
    readonly ignoreChildErrors?: boolean | undefined;
} | undefined) => import("../functions.js").Updater<T>;
export declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => import("../functions.js").Updater<T>;
export declare const create: import("../functions.js").Factory<DisposableLike>;
export declare const disposed: DisposableLike;
export declare const onComplete: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect) => import("../functions.js").Updater<T>;
export declare const onDisposed: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect1<import("../functions.js").Optional<Error>>) => import("../functions.js").Updater<T>;
export declare const onError: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect1<Error>) => import("../functions.js").Updater<T>;
export declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export declare const toErrorHandler: (disposable: DisposableLike) => import("../functions.js").SideEffect1<unknown>;
export declare const toObservable: <T>() => import("../functions.js").Function1<DisposableLike, import("../rx.js").ObservableLike<T>>;
export declare const usingAsync: {
    <TDisposable extends DisposableLike, TResult = unknown>(factoryOrDisposable: TDisposable | import("../functions.js").Factory<TDisposable>): import("../functions.js").Function1<import("../functions.js").Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;
    <TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult_1 = unknown>(factoryOrDisposableA: TDisposableA | import("../functions.js").Factory<TDisposableA>, factoryOrDisposableB: TDisposableB | import("../functions.js").Factory<TDisposableB>): import("../functions.js").Function1<import("../functions.js").Function2<TDisposableA, TDisposableB, Promise<TResult_1>>, Promise<TResult_1>>;
    <TDisposableA_1 extends DisposableLike, TDisposableB_1 extends DisposableLike, TDisposableC extends DisposableLike, TResult_2 = unknown>(factoryOrDisposableA: TDisposableA_1 | import("../functions.js").Factory<TDisposableA_1>, factoryOrDisposableB: TDisposableB_1 | import("../functions.js").Factory<TDisposableB_1>, factoryOrDisposableC: TDisposableC | import("../functions.js").Factory<TDisposableC>): import("../functions.js").Function1<import("../functions.js").Function3<TDisposableA_1, TDisposableB_1, TDisposableC, Promise<TResult_2>>, Promise<TResult_2>>;
};
