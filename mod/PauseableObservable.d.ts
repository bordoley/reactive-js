import { Function1 } from "./functions.js";
import { Container_T, Container_type, DeferredObservableLike, DispatcherLike, IndexedContainer, IndexedContainerModule, PauseableObservableLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface PauseableObservableContainer extends IndexedContainer {
    readonly [Container_type]?: PauseableObservableLike<this[typeof Container_T]>;
}
export type Type = PauseableObservableContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface PauseableObservableModule extends IndexedContainerModule<Type> {
    sinkInto<T>(sink: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}
export type Signature = PauseableObservableModule;
export declare const buffer: Signature["buffer"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const sinkInto: Signature["sinkInto"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
