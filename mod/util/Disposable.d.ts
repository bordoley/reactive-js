import { ObservableLike } from "../rx.js";
import { Updater, Factory, Optional, SideEffect, SideEffect1, Function1 } from "../functions.js";
import { DisposableLike, DisposableLike_error, DisposableLike_isDisposed } from "../util.js";
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
declare const create: Factory<DisposableLike>;
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: <T extends DisposableLike>(e?: Error | undefined) => Updater<T>;
declare const disposed: DisposableLike;
declare const getError: (disposable: {
    [DisposableLike_error]: Optional<Error>;
}) => Optional<Error>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Optional<Error>>) => Updater<T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Updater<T>;
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
declare const toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
/** @ignore */
declare const Disposable: {
    add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
    addIgnoringChildErrors: <T_1 extends DisposableLike>(child: DisposableLike) => (parent: T_1) => T_1;
    addTo: <T_2 extends DisposableLike>(parent: DisposableLike) => Updater<T_2>;
    addToIgnoringChildErrors: <T_3 extends DisposableLike>(parent: DisposableLike) => Updater<T_3>;
    bindTo: <T_4 extends DisposableLike>(child: DisposableLike) => Updater<T_4>;
    create: Factory<DisposableLike>;
    dispose: <T_5 extends DisposableLike>(e?: Error | undefined) => Updater<T_5>;
    disposed: DisposableLike;
    getError: (disposable: {
        [DisposableLike_error]: Optional<Error>;
    }) => Optional<Error>;
    isDisposed: (disposable: {
        [DisposableLike_isDisposed]: boolean;
    }) => boolean;
    onComplete: <T_6 extends DisposableLike>(teardown: SideEffect) => Updater<T_6>;
    onDisposed: <T_7 extends DisposableLike>(teardown: SideEffect1<Optional<Error>>) => Updater<T_7>;
    onError: <T_8 extends DisposableLike>(teardown: SideEffect1<Error>) => Updater<T_8>;
    toAbortSignal: (disposable: DisposableLike) => AbortSignal;
    toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
    toObservable: <T_9>() => Function1<DisposableLike, ObservableLike<T_9>>;
};
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, Disposable as default, dispose, disposed, getError, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };
