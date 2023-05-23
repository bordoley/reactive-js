import { Predicate } from "./functions.js";
import { Container, Container_T, Container_type, DeferredContainerModule, DeferredObservableLike, EnumerableLike, HigherOrderObservableModule, RunnableLike } from "./types.js";
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
 * @category Module
 */
export interface DeferredObservableModule extends DeferredContainerModule<Type>, HigherOrderObservableModule<Type, Type> {
    /**
     * @category Operator
     */
    repeat<T>(predicate: Predicate<number>): DeferredObservableOperator<T, T>;
    repeat<T>(count: number): DeferredObservableOperator<T, T>;
    repeat<T>(): DeferredObservableOperator<T, T>;
    /**
     * @category Operator
     */
    retry<T>(shouldRetry: (count: number, error: Error) => boolean): DeferredObservableOperator<T, T>;
}
export type Signature = DeferredObservableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const scanLast: Signature["scanLast"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const startWith: Signature["startWith"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toObservable: Signature["toObservable"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
