import { Optional } from "../functions.js";
import { DisposableLike, DisposableLike_error, DisposableLike_isDisposed } from "../util.js";
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
export declare const getError: (disposable: {
    [DisposableLike_error]: Optional<Error>;
}) => Optional<Error>;
export declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
export declare const onComplete: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect) => import("../functions.js").Updater<T>;
export declare const onDisposed: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect1<Optional<Error>>) => import("../functions.js").Updater<T>;
export declare const onError: <T extends DisposableLike>(teardown: import("../functions.js").SideEffect1<Error>) => import("../functions.js").Updater<T>;
export declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export declare const toErrorHandler: (disposable: DisposableLike) => import("../functions.js").SideEffect1<unknown>;
export declare const toObservable: <T>() => import("../functions.js").Function1<DisposableLike, import("../rx.js").ObservableLike<T>>;
/** @ignore */
declare const Disposable: {
    add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
    addIgnoringChildErrors: <T_1 extends DisposableLike>(child: DisposableLike) => (parent: T_1) => T_1;
    addTo: <T_2 extends DisposableLike>(parent: DisposableLike) => import("../functions.js").Updater<T_2>;
    addToIgnoringChildErrors: <T_3 extends DisposableLike>(parent: DisposableLike) => import("../functions.js").Updater<T_3>;
    bindTo: <T_4 extends DisposableLike>(child: DisposableLike) => import("../functions.js").Updater<T_4>;
    create: import("../functions.js").Factory<DisposableLike>;
    dispose: <T_5 extends DisposableLike>(e?: Error | undefined) => import("../functions.js").Updater<T_5>;
    disposed: DisposableLike;
    getError: (disposable: {
        [DisposableLike_error]: Optional<Error>;
    }) => Optional<Error>;
    isDisposed: (disposable: {
        [DisposableLike_isDisposed]: boolean;
    }) => boolean;
    onComplete: <T_6 extends DisposableLike>(teardown: import("../functions.js").SideEffect) => import("../functions.js").Updater<T_6>;
    onDisposed: <T_7 extends DisposableLike>(teardown: import("../functions.js").SideEffect1<Optional<Error>>) => import("../functions.js").Updater<T_7>;
    onError: <T_8 extends DisposableLike>(teardown: import("../functions.js").SideEffect1<Error>) => import("../functions.js").Updater<T_8>;
    toAbortSignal: (disposable: DisposableLike) => AbortSignal;
    toErrorHandler: (disposable: DisposableLike) => import("../functions.js").SideEffect1<unknown>;
    toObservable: <T_9>() => import("../functions.js").Function1<DisposableLike, import("../rx.js").ObservableLike<T_9>>;
};
export default Disposable;
