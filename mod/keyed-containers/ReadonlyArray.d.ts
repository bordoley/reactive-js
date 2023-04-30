import { EnumeratorLike, EverySatisfy, First, FromIterable, FromOptional, Last, SomeSatisfy } from "../containers.js";
import type * as Containers from "../containers.js";
import { Function1 } from "../functions.js";
import { Empty, Entries, ForEach, ForEachWithKey, FromReadonlyArray, Identity, Keep, KeepType, KeepWithKey, Map, MapWithKey, ReadonlyArrayContainerLike, ToReadonlyArray } from "../keyed-containers.js";
import { EnumerableLike, FromEnumerable, FromRunnable, ObservableLike, PauseableObservableLike, RunnableLike } from "../rx.js";
import type * as Rx from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const empty: Empty<ReadonlyArrayContainerLike>["empty"];
export declare const entries: Entries<ReadonlyArrayContainerLike>["entries"];
interface Enumerate extends Containers.Enumerate<ReadonlyArrayContainerLike> {
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
export declare const everySatisfy: EverySatisfy<ReadonlyArrayContainerLike>["everySatisfy"];
export declare const first: First<ReadonlyArrayContainerLike>["first"];
interface Flow extends Rx.Flow<ReadonlyArrayContainerLike> {
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
export declare const forEach: ForEach<ReadonlyArrayContainerLike>["forEach"];
export declare const forEachWithKey: ForEachWithKey<ReadonlyArrayContainerLike>["forEachWithKey"];
export declare const fromEnumerable: FromEnumerable<ReadonlyArrayContainerLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<ReadonlyArrayContainerLike>["fromIterable"];
export declare const fromOptional: FromOptional<ReadonlyArrayContainerLike>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayContainerLike>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<ReadonlyArrayContainerLike>["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: Identity<ReadonlyArrayContainerLike>["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: Keep<ReadonlyArrayContainerLike>["keep"];
export declare const keepType: KeepType<ReadonlyArrayContainerLike>["keepType"];
export declare const keepWithKey: KeepWithKey<ReadonlyArrayContainerLike>["keepWithKey"];
export declare const last: Last<ReadonlyArrayContainerLike>["last"];
export declare const map: Map<ReadonlyArrayContainerLike>["map"];
export declare const mapWithKey: MapWithKey<ReadonlyArrayContainerLike>["mapWithKey"];
export declare const someSatisfy: SomeSatisfy<ReadonlyArrayContainerLike>["someSatisfy"];
interface ToEnumerable extends Rx.ToEnumerable<ReadonlyArrayContainerLike> {
    /**
     * @category Transform
     */
    toEnumerable<T>(options?: {
        readonly start: number;
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
}
export declare const toEnumerable: ToEnumerable["toEnumerable"];
interface ToIterable extends Containers.ToIterable<ReadonlyArrayContainerLike> {
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export declare const toIterable: ToIterable["toIterable"];
interface ToObservable extends Rx.ToObservable<ReadonlyArrayContainerLike> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArray<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayContainerLike>["toReadonlyArray"];
interface ToRunnable extends Rx.ToRunnable<ReadonlyArrayContainerLike> {
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
