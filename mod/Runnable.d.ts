import { Factory, Function1, SideEffect1 } from "./functions.js";
import { HigherOrderObservableBaseTypeClass, RunnableContainerTypeClass } from "./type-classes.js";
import { DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableContainer, RunnableLike, SchedulerLike } from "./types.js";
export type Type = RunnableContainer;
export interface Signature extends RunnableContainerTypeClass<Type>, HigherOrderObservableBaseTypeClass<Type, Type> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): RunnableLike<T>;
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<RunnableLike<T>, PauseableObservableLike<T> & DisposableLike>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
}
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const flow: Signature["flow"];
export declare const forEach: Signature["forEach"];
export declare const fromFactory: Signature["fromFactory"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const reduce: Signature["reduce"];
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
export declare const toReadonlyArray: Signature["toReadonlyArray"];
