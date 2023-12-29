import { DeferredObservableLike, DispatcherLike, FlowableLike, ObservableLike } from "../concurrent.js";
import { Function1 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface FlowableModule {
    create<T>(op: Function1<ObservableLike<boolean>, DeferredObservableLike<T>>): FlowableLike<T>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, FlowableLike<T>>;
    sinkInto<T>(sink: DispatcherLike<T>): Function1<FlowableLike<T>, DeferredObservableLike<void>>;
}
export type Signature = FlowableModule;
export declare const create: Signature["create"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const sinkInto: Signature["sinkInto"];
