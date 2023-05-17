import { Factory, Function1, Optional, SideEffect1, Updater } from "./functions.js";
import { HigherOrderObservableBaseTypeClass, RunnableContainerTypeClass } from "./type-classes.js";
import { DisposableLike, EnumerableLike, EnumeratorLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableContainer, RunnableLike, SchedulerLike } from "./types.js";
export type Type = RunnableContainer;
export interface RunnableModule extends RunnableContainerTypeClass<Type>, HigherOrderObservableBaseTypeClass<Type, Type> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): RunnableLike<T>;
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<RunnableLike<T>, PauseableObservableLike<T> & DisposableLike>;
    fromEnumeratorFactory<T>(): Function1<Factory<EnumeratorLike<T>>, EnumerableLike<T>>;
    fromEnumeratorFactory<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Factory<EnumeratorLike<T>>, RunnableLike<T>>;
    fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
    fromFactory<T>(options: {
        readonly delay: number;
    }): Function1<Factory<T>, RunnableLike<T>>;
    fromIterable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
    fromIterable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
    fromOptional<T>(): Function1<Optional<T>, EnumerableLike<T>>;
    fromOptional<T>(options: {
        readonly delay: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
    fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, RunnableLike<T>>;
    fromValue<T>(): Function1<T, EnumerableLike<T>>;
    fromValue<T>(options: {
        readonly delay: number;
    }): Function1<T, RunnableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
    throws<T>(): EnumerableLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
    }): EnumerableLike<T>;
    throws<T>(options: {
        readonly delay: number;
        readonly raise?: Factory<unknown>;
    }): RunnableLike<T>;
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
export declare const forEach: Signature["forEach"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
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
export declare const throws: Signature["throws"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
