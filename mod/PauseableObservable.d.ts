import { Function1 } from "./functions.js";
import { ContainerTypeClass } from "./type-classes.js";
import { ContainerOperator, DeferredObservableLike, DispatcherLike, PauseableObservableContainer, PauseableObservableLike, QueueableLike } from "./types.js";
export type Type = PauseableObservableContainer;
export interface PauseableObservableModule extends ContainerTypeClass<Type> {
    enqueue<T>(queue: QueueableLike<T>): ContainerOperator<Type, T, T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ContainerOperator<Type, T, T>;
    sinkInto<T>(sink: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}
export type Signature = PauseableObservableModule;
export declare const dispatchTo: Signature["dispatchTo"];
export declare const enqueue: Signature["enqueue"];
export declare const forEach: Signature["forEach"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
export declare const sinkInto: Signature["sinkInto"];
