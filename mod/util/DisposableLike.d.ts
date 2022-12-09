import { ObservableLike } from "../rx.mjs";
import { Updater, Factory, Option, SideEffect, SideEffect1, Function1 } from "../functions.mjs";
import { DisposableLike, Exception, DisposableLike_exception, DisposableLike_isDisposed } from "../util.mjs";
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
declare const create: Factory<DisposableLike>;
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: <T extends DisposableLike>(e?: Exception | undefined) => Updater<T>;
declare const disposed: DisposableLike;
declare const getException: (disposable: {
    [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Exception>>) => Updater<T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Exception>) => Updater<T>;
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
declare const toObservable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, dispose, disposed, getException, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };
