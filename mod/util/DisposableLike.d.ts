import { SideEffect1 } from "../functions.mjs";
import { DisposableLike } from "../util.mjs";
export { add, addIgnoringChildErrors, addTo, addToIgnoringChildErrors, bindTo, dispose, getException, isDisposed, onComplete, onDisposed, onError } from '../__internal__/util/DisposableLikeInternal.js';
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
declare const toErrorHandler: (disposable: DisposableLike) => SideEffect1<unknown>;
declare const toAbortSignal: (disposable: DisposableLike) => AbortSignal;
export { toAbortSignal, toErrorHandler };
