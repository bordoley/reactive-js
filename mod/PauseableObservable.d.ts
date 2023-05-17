import { Function1 } from "./functions.js";
import { ContainerTypeClass } from "./type-classes.js";
import { ContainerOperator, DeferredObservableLike, DispatcherLike, PauseableObservableContainer, PauseableObservableLike, QueueableLike } from "./types.js";
export type Type = PauseableObservableContainer;
export interface PauseableObservableModule extends ContainerTypeClass<Type> {
    enqueue<T>(queue: QueueableLike<T>): ContainerOperator<Type, T, T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ContainerOperator<Type, T, T>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ContainerOperator<Type, TA, TB>;
    sinkInto<T>(sink: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<Type, T, T>;
}
export type Signature = PauseableObservableModule;
export declare const buffer: Signature["buffer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const enqueue: Signature["enqueue"];
export declare const forEach: Signature["forEach"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const sinkInto: Signature["sinkInto"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
