import { SideEffect1, Option, Updater, SideEffect } from "../../functions.mjs";
declare const DisposableLike_add: unique symbol;
declare const DisposableLike_dispose: unique symbol;
declare const DisposableLike_exception: unique symbol;
declare const DisposableLike_isDisposed: unique symbol;
declare type Exception = {
    readonly cause: unknown;
};
declare type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Exception>>;
interface DisposableLike {
    readonly [DisposableLike_exception]: Option<Exception>;
    readonly [DisposableLike_isDisposed]: boolean;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
}
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
export { DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_exception, DisposableLike_isDisposed, DisposableOrTeardown, Exception, add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError };
