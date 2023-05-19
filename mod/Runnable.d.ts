import { Factory, SideEffect1 } from "./functions.js";
import { Container, Container_T, Container_type, HigherOrderObservableTypeClass, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, RunnableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends Container {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}
export type Type = RunnableContainer;
export interface RunnableModule extends RunnableTypeClass<Type>, HigherOrderObservableTypeClass<Type, Type> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): RunnableLike<T>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
}
export type Signature = RunnableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
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
export declare const forEach: Signature["forEach"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const ignoreElements: Signature["ignoreElements"];
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
export declare const scanLast: Signature["scanLast"];
export declare const scanMany: Signature["scanMany"];
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
