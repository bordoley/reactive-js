import { SideEffect1 } from "../functions.mjs";
import { ObservableLike } from "../rx.mjs";
import { DisposableLike } from "../util.mjs";
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError } from '../__internal__/util/DisposableLikeInternal.js';
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
declare const toObservable: <T>() => (disposable: DisposableLike) => ObservableLike<T>;
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
export { toAbortSignal, toErrorHandler, toObservable };
