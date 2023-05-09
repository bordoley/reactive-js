import { ReadonlyArrayContainer } from "./containers.js";
import { Function1 } from "./functions.js";
import { DisposableLike, EnumerableLike, EnumeratorLike, ObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike } from "./types.js";
export declare const empty: ReadonlyArrayContainer.TypeClass["empty"];
export declare const entries: ReadonlyArrayContainer.TypeClass["entries"];
interface Enumerate extends ReadonlyArrayContainer.TypeClass {
    /**
     *
     * @category Transform
     */
    enumerate<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
}
export declare const enumerate: Enumerate["enumerate"];
export declare const everySatisfy: ReadonlyArrayContainer.TypeClass["everySatisfy"];
export declare const first: ReadonlyArrayContainer.TypeClass["first"];
interface Flow extends ReadonlyArrayContainer.TypeClass {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArray<T>, PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const forEach: ReadonlyArrayContainer.TypeClass["forEach"];
export declare const forEachWithKey: ReadonlyArrayContainer.TypeClass["forEachWithKey"];
export declare const fromEnumerable: ReadonlyArrayContainer.TypeClass["fromEnumerable"];
export declare const fromIterable: ReadonlyArrayContainer.TypeClass["fromIterable"];
export declare const fromOptional: ReadonlyArrayContainer.TypeClass["fromOptional"];
export declare const fromReadonlyArray: ReadonlyArrayContainer.TypeClass["fromReadonlyArray"];
export declare const fromRunnable: ReadonlyArrayContainer.TypeClass["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: ReadonlyArrayContainer.TypeClass["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: ReadonlyArrayContainer.TypeClass["keep"];
export declare const keepType: ReadonlyArrayContainer.TypeClass["keepType"];
export declare const keepWithKey: ReadonlyArrayContainer.TypeClass["keepWithKey"];
export declare const last: ReadonlyArrayContainer.TypeClass["last"];
export declare const map: ReadonlyArrayContainer.TypeClass["map"];
export declare const mapWithKey: ReadonlyArrayContainer.TypeClass["mapWithKey"];
export declare const someSatisfy: ReadonlyArrayContainer.TypeClass["someSatisfy"];
interface ToEnumerable extends ReadonlyArrayContainer.TypeClass {
    /**
     * @category Transform
     */
    toEnumerable<T>(options?: {
        readonly start: number;
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
}
export declare const toEnumerable: ToEnumerable["toEnumerable"];
interface ToIterable extends ReadonlyArrayContainer.TypeClass {
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export declare const toIterable: ToIterable["toIterable"];
interface ToObservable extends ReadonlyArrayContainer.TypeClass {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArray<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ReadonlyArrayContainer.TypeClass["toReadonlyArray"];
interface ToRunnable extends ReadonlyArrayContainer.TypeClass {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArray<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
