import { SideEffect1, Option, Identity, SideEffect } from "../../functions.mjs";
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
declare const dispose: <T extends DisposableLike>(e?: Exception) => Identity<T>;
declare const getException: (disposable: {
    [DisposableLike_exception]: Option<Exception>;
}) => Option<Exception>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
declare const addDisposableOrTeardown: (parent: DisposableLike, child: DisposableOrTeardown, ignoreChildErrors?: boolean) => void;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Identity<T>;
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Identity<T>;
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Identity<T>;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Exception>>) => Identity<T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Exception>) => Identity<T>;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Identity<T>;
export { DisposableLike, DisposableLike_add, DisposableLike_dispose, DisposableLike_exception, DisposableLike_isDisposed, DisposableOrTeardown, Exception, add, addDisposableOrTeardown, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError };
