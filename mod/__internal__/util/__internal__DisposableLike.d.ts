import { Updater, Option, SideEffect1, SideEffect } from "../../functions.mjs";
import { DisposableLike, Exception, DisposableLike_exception, DisposableLike_isDisposed } from "../../util.mjs";
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: <T extends DisposableLike>(e?: Exception) => Updater<T>;
declare const getException: (disposable: {
    [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Updater<T>;
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Updater<T>;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Exception>>) => Updater<T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Exception>) => Updater<T>;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Updater<T>;
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError };
