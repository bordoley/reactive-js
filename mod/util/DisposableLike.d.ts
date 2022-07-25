import { Identity, SideEffect1, Option, SideEffect } from "../functions.mjs";
import { DisposableLike, Error } from "../util.mjs";
export { dispose, getError, isDisposed } from '../__internal__/util/DisposableLikeInternal.js';
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
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, onComplete, onDisposed, onError, toAbortSignal, toErrorHandler };
