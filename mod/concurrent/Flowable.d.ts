import { DeferredObservableLike, FlowableLike, ObservableLike } from "../concurrent.js";
import { Function1 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface FlowableModule {
    create<T>(op: Function1<ObservableLike<boolean>, DeferredObservableLike<T>>): FlowableLike<T>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, FlowableLike<T>>;
}
export type Signature = FlowableModule;
export declare const create: Signature["create"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
