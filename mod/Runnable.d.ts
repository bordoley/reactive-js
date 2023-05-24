import { Factory, Function1, SideEffect1 } from "./functions.js";
import { Container, Container_T, Container_type, QueueableLike, QueueableLike_backpressureStrategy, RunnableBaseLike, RunnableLike } from "./types.js";
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
export interface RunnableModule {
    /**
     * @category Constructor
     */
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): RunnableLike<T>;
    /**
     * @category Operator
     */
    concatAll<T>(): Function1<RunnableBaseLike<RunnableBaseLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    concatMap<TA, TB>(selector: Function1<TA, RunnableBaseLike<TB>>): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;
    /**
     * @category Operator
     */
    exhaust<T>(): Function1<RunnableBaseLike<RunnableBaseLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    exhaustMap<TA, TB>(selector: Function1<TA, RunnableBaseLike<TB>>): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;
    /**
     * @category Operator
     */
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<RunnableBaseLike<RunnableBaseLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    mergeMap<TA, TB>(selector: Function1<TA, RunnableBaseLike<TB>>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableBaseLike<T>>;
    /**
     *
     * @category Operator
     */
    switchAll<T>(): Function1<RunnableBaseLike<RunnableBaseLike<T>>, RunnableLike<T>>;
    /**
     * @category Operator
     */
    switchMap<TA, TB>(selector: Function1<TA, RunnableBaseLike<TB>>): Function1<RunnableBaseLike<TA>, RunnableLike<TB>>;
}
export type Signature = RunnableModule;
export declare const compute: Signature["compute"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const run: Signature["run"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
