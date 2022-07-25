import { Identity, SideEffect1, SideEffect, Factory } from "../functions.mjs";
import { DisposableLike, Error, DisposableLike_error, Option, DisposableLike_isDisposed } from "../util.mjs";
/**
 * Dispose `disposable` with an optional error.
 */
declare const dispose: <T extends DisposableLike>(e?: Error) => Identity<T>;
declare const getError: (disposable: {
    [DisposableLike_error]: Option<Error>;
}) => Option<Error>;
declare const isDisposed: (disposable: {
    [DisposableLike_isDisposed]: boolean;
}) => boolean;
declare const bindTo: <T extends DisposableLike>(child: DisposableLike) => Identity<T>;
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
declare const addTo: <T extends DisposableLike>(parent: DisposableLike) => Identity<T>;
declare const addToIgnoringChildErrors: <T extends DisposableLike>(parent: DisposableLike) => Identity<T>;
declare const onDisposed: <T extends DisposableLike>(teardown: SideEffect1<Option<Error>>) => Identity<T>;
declare const onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Identity<T>;
declare const onComplete: <T extends DisposableLike>(teardown: SideEffect) => Identity<T>;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
declare const disposed: DisposableLike;
declare const create: Factory<DisposableLike>;
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, create, dispose, disposed, getError, isDisposed, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };
