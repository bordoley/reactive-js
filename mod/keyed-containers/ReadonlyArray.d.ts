import { EnumeratorLike, EverySatisfy, First, FromIterable, FromOptional, IterableLike, Last, SomeSatisfy } from "../containers.js";
import type * as Containers from "../containers.js";
import { Function1 } from "../functions.js";
import { Empty, Entries, ForEach, ForEachWithKey, FromReadonlyArray, Identity, Keep, KeepType, KeepWithKey, Map, MapWithKey, ReadonlyArrayLike, ToReadonlyArray } from "../keyed-containers.js";
import { EnumerableLike, FromEnumerable, FromRunnable, ObservableLike, PauseableObservableLike, RunnableLike } from "../rx.js";
import type * as Rx from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const empty: Empty<ReadonlyArrayLike>["empty"];
export declare const entries: Entries<ReadonlyArrayLike>["entries"];
interface Enumerate extends Containers.Enumerate<ReadonlyArrayLike, EnumeratorLike> {
    /**
     *
     * @category Transform
     */
    enumerate<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArrayLike<T>, EnumeratorLike<T>>;
}
export declare const enumerate: Enumerate["enumerate"];
export declare const everySatisfy: EverySatisfy<ReadonlyArrayLike>["everySatisfy"];
export declare const first: First<ReadonlyArrayLike>["first"];
interface Flow extends Rx.Flow<ReadonlyArrayLike> {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArrayLike<T>, PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
export declare const forEachWithKey: ForEachWithKey<ReadonlyArrayLike>["forEachWithKey"];
export declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"];
export declare const fromOptional: FromOptional<ReadonlyArrayLike>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<ReadonlyArrayLike>["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: Identity<ReadonlyArrayLike>["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: Keep<ReadonlyArrayLike>["keep"];
export declare const keepType: KeepType<ReadonlyArrayLike>["keepType"];
export declare const keepWithKey: KeepWithKey<ReadonlyArrayLike>["keepWithKey"];
export declare const last: Last<ReadonlyArrayLike>["last"];
export declare const map: Map<ReadonlyArrayLike>["map"];
export declare const mapWithKey: MapWithKey<ReadonlyArrayLike>["mapWithKey"];
export declare const someSatisfy: SomeSatisfy<ReadonlyArrayLike>["someSatisfy"];
interface ToEnumerable extends Rx.ToEnumerable<ReadonlyArrayLike> {
    /**
     * @category Transform
     */
    toEnumerable<T>(options?: {
        readonly start: number;
        readonly count: number;
    }): Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
}
export declare const toEnumerable: ToEnumerable["toEnumerable"];
interface ToIterable extends Containers.ToIterable<ReadonlyArrayLike> {
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArrayLike<T>, IterableLike<T>>;
}
export declare const toIterable: ToIterable["toIterable"];
interface ToObservable extends Rx.ToObservable<ReadonlyArrayLike> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArrayLike<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike>["toReadonlyArray"];
interface ToRunnable extends Rx.ToRunnable<ReadonlyArrayLike> {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArrayLike<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
