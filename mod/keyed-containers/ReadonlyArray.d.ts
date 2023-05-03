import { Container, EnumeratorLike } from "../containers.js";
import { Function1 } from "../functions.js";
import { Empty, Entries, ForEach, ForEachWithKey, FromReadonlyArray, Identity, Keep, KeepType, KeepWithKey, Map, MapWithKey, ReadonlyArrayContainer, ToReadonlyArray } from "../keyed-containers.js";
import { EnumerableLike, FromEnumerable, FromRunnable, ObservableLike, PauseableObservableLike, RunnableLike } from "../rx.js";
import type * as Rx from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const empty: Empty<ReadonlyArrayContainer>["empty"];
export declare const entries: Entries<ReadonlyArrayContainer>["entries"];
interface Enumerate extends Container.Enumerate<ReadonlyArrayContainer> {
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
export declare const everySatisfy: Container.EverySatisfy<ReadonlyArrayContainer>["everySatisfy"];
export declare const first: Container.First<ReadonlyArrayContainer>["first"];
interface Flow extends Rx.Flow<ReadonlyArrayContainer> {
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
export declare const forEach: ForEach<ReadonlyArrayContainer>["forEach"];
export declare const forEachWithKey: ForEachWithKey<ReadonlyArrayContainer>["forEachWithKey"];
export declare const fromEnumerable: FromEnumerable<ReadonlyArrayContainer>["fromEnumerable"];
export declare const fromIterable: Container.FromIterable<ReadonlyArrayContainer>["fromIterable"];
export declare const fromOptional: Container.FromOptional<ReadonlyArrayContainer>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayContainer>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<ReadonlyArrayContainer>["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: Identity<ReadonlyArrayContainer>["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: Keep<ReadonlyArrayContainer>["keep"];
export declare const keepType: KeepType<ReadonlyArrayContainer>["keepType"];
export declare const keepWithKey: KeepWithKey<ReadonlyArrayContainer>["keepWithKey"];
export declare const last: Container.Last<ReadonlyArrayContainer>["last"];
export declare const map: Map<ReadonlyArrayContainer>["map"];
export declare const mapWithKey: MapWithKey<ReadonlyArrayContainer>["mapWithKey"];
export declare const someSatisfy: Container.SomeSatisfy<ReadonlyArrayContainer>["someSatisfy"];
interface ToEnumerable extends Rx.ToEnumerable<ReadonlyArrayContainer> {
    /**
     * @category Transform
     */
    toEnumerable<T>(options?: {
        readonly start: number;
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
}
export declare const toEnumerable: ToEnumerable["toEnumerable"];
interface ToIterable extends Container.ToIterable<ReadonlyArrayContainer> {
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export declare const toIterable: ToIterable["toIterable"];
interface ToObservable extends Rx.ToObservable<ReadonlyArrayContainer> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArray<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayContainer>["toReadonlyArray"];
interface ToRunnable extends Rx.ToRunnable<ReadonlyArrayContainer> {
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
