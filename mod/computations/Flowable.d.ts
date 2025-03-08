import { AsyncIterableLike, DeferredObservableWithSideEffectsLike, FlowableLike, SynchronousObservableLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DispatcherLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface FlowableModule {
    dispatchTo<T>(dispatcher: DispatcherLike<T>): Function1<FlowableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterableLike<T>, FlowableLike<T>>;
    fromSynchronousObservable<T>(): Function1<SynchronousObservableLike<T>, FlowableLike<T>>;
}
export type Signature = FlowableModule;
export declare const dispatchTo: Signature["dispatchTo"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromSynchronousObservable: Signature["fromSynchronousObservable"];
