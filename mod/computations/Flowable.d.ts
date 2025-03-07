import { DeferredObservableLike, DeferredObservableWithSideEffectsLike, DispatcherLike, EventSourceLike, FlowableLike, SynchronousObservableLike } from "../computations.js";
import { Function1 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface FlowableModule {
    create<T>(op: Function1<EventSourceLike<boolean>, DeferredObservableLike<T>>): FlowableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): Function1<FlowableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, FlowableLike<T>>;
    fromSynchronousObservable<T>(): Function1<SynchronousObservableLike<T>, FlowableLike<T>>;
}
export type Signature = FlowableModule;
export declare const create: Signature["create"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromSynchronousObservable: Signature["fromSynchronousObservable"];
