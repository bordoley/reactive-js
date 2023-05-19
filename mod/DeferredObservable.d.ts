import { Factory, Function1, Predicate } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableLike, DeferredTypeClass, DisposableLike, EnumerableLike, HigherOrderObservableTypeClass, MulticastObservableLike, QueueableLike, QueueableLike_backpressureStrategy, ReplayObservableLike, RunnableLike, SchedulerLike } from "./types.js";
export type DeferredObservableOperator<TIn, TOut> = <TObservableIn extends DeferredObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : never;
/**
 * @noInheritDoc
 * @category Container
 */
export interface DeferredObservableContainer extends Container {
    readonly [Container_type]?: DeferredObservableLike<this[typeof Container_T]>;
}
export type Type = DeferredObservableContainer;
/**
 * @noInheritDoc
 */
export interface DeferredObservableModule extends DeferredTypeClass<Type>, HigherOrderObservableTypeClass<Type, Type> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): DeferredObservableLike<T>;
    multicast<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<DeferredObservableLike<T>, ReplayObservableLike<T> & DisposableLike>;
    repeat<T>(predicate: Predicate<number>): DeferredObservableOperator<T, T>;
    repeat<T>(count: number): DeferredObservableOperator<T, T>;
    repeat<T>(): DeferredObservableOperator<T, T>;
    retry<T>(shouldRetry: (count: number, error: Error) => boolean): DeferredObservableOperator<T, T>;
    share<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<DeferredObservableLike<T>, MulticastObservableLike<T>>;
}
export type Signature = DeferredObservableModule;
export declare const catchError: Signature["catchError"];
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
export declare const scanLast: Signature["scanLast"];
export declare const scanMany: Signature["scanMany"];
export declare const share: Signature["share"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
export declare const toObservable: Signature["toObservable"];
