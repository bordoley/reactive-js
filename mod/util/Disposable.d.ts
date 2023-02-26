import { DisposableLike } from "../util.js";
export declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => import("../functions.js").Updater<T>;
export declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => import("../functions.js").Updater<T>;
export declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => import("../functions.js").Updater<T>;
export declare const create: import("../functions.js").Factory<DisposableLike>;
/**
 * Dispose `disposable` with an optional error.
 */
export declare const dispose: <T extends DisposableLike>(e?: Error | undefined) => import("../functions.js").Updater<T>;
export declare const disposed: DisposableLike;
export declare const getError: (disposable: DisposableLike) => import("../functions.js").Optional<Error>;
export declare const isDisposed: (disposable: DisposableLike) => boolean;
export declare const onComplete: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect) => import("../functions.js").Updater<T>;
export declare const onDisposed: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect1<import("../functions.js").Optional<Error>>) => import("../functions.js").Updater<T>;
export declare const onError: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect1<Error>) => import("../functions.js").Updater<T>;
export declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export declare const toErrorHandler: (disposable: DisposableLike) => import("../functions.js").SideEffect1<unknown>;
export declare const toObservable: <T>() => import("../functions.js").Function1<DisposableLike, import("../rx.js").ObservableLike<T>>;
