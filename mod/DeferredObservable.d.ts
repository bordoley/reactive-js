import { Factory, Function1, Predicate } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import { DeferredObservableContainer, DeferredObservableLike, DisposableLike, EnumerableLike, MulticastObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike, SharedObservableLike } from "./types.js";
export type EnumerableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends DeferredObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : never;
export type Type = DeferredObservableContainer;
export interface Signature extends HigherOrderObservableBaseTypeClass<Type, Type> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): DeferredObservableLike<T>;
    multicast<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<DeferredObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
    repeat<T>(predicate: Predicate<number>): EnumerableUpperBoundObservableOperator<T, T>;
    repeat<T>(count: number): EnumerableUpperBoundObservableOperator<T, T>;
    repeat<T>(): EnumerableUpperBoundObservableOperator<T, T>;
    retry<T>(shouldRetry: (count: number, error: Error) => boolean): EnumerableUpperBoundObservableOperator<T, T>;
    share<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<DeferredObservableLike<T>, SharedObservableLike<T>>;
}
export declare const compute: Signature["compute"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const multicast: Signature["multicast"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const share: Signature["share"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
