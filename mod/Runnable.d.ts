import { Factory, Function1, SideEffect1 } from "./functions.js";
import { Container, Container_T, Container_type, QueueableLike, QueueableLike_backpressureStrategy, RunnableContainerModule, RunnableLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends Container {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}
export type Type = RunnableContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface RunnableModule extends RunnableContainerModule<Type> {
    /**
     * @category Constructor
     */
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): RunnableLike<T>;
    /**
     * @category Operator
     */
    exhaust<T>(): Function1<RunnableLike<RunnableLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    exhaustMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>): Function1<RunnableLike<TA>, RunnableLike<TB>>;
    /**
     * @category Operator
     */
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<RunnableLike<RunnableLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    mergeMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<RunnableLike<TA>, RunnableLike<TB>>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
    /**
     *
     * @category Operator
     */
    switchAll<T>(): Function1<RunnableLike<RunnableLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    switchMap<TA, TB>(selector: Function1<TA, RunnableLike<TB>>): Function1<RunnableLike<TA>, RunnableLike<TB>>;
}
export type Signature = RunnableModule;
export declare const buffer: Signature["buffer"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const first: Signature["first"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const flow: Signature["flow"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const startWith: Signature["startWith"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
