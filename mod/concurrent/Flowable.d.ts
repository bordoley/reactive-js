import { DeferredObservableLike, DeferredObservableWithSideEffectsLike, DispatcherLike, FlowableLike, MulticastObservableLike, RunnableLike } from "../concurrent.js";
import { Function1 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface FlowableModule {
    create<T>(op: Function1<MulticastObservableLike<boolean>, DeferredObservableLike<T>>): FlowableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): Function1<FlowableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, FlowableLike<T>>;
    fromRunnable<T>(): Function1<RunnableLike<T>, FlowableLike<T>>;
}
export type Signature = FlowableModule;
export declare const create: Signature["create"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromRunnable: Signature["fromRunnable"];
