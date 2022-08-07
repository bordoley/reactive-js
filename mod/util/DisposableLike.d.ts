import { Updater, Option, SideEffect1, SideEffect } from "../functions.mjs";
import { DisposableLike, Exception } from "../__internal__/util/DisposableLikeInternal.mjs";
import { ObservableLike } from "../rx.mjs";
import { DisposableLike_exception, Exception as Exception$1, DisposableLike_isDisposed, DisposableLike as DisposableLike$1 } from "../util.mjs";
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
declare const dispose: <T extends DisposableLike>(e?: Exception | undefined) => Updater<T>;
declare const getException: (disposable: {
    [DisposableLike_exception]: Option<Exception$1>;
}) => Option<Exception$1>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Exception>>) => Updater<T>;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Exception>) => Updater<T>;
declare const toAbortSignal: (disposable: DisposableLike$1) => AbortSignal;
declare const toObservable: <T>() => (disposable: DisposableLike$1) => ObservableLike<T>;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike$1) => SideEffect1<unknown>;
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler, toObservable };
