import { Containers, DisposableLike, EnumerableLike, EnumeratorLike, KeyedContainers, ObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, ReadonlyArrayContainer, RunnableContainers, RunnableLike, SchedulerLike } from "../core.js";
import { Function1 } from "../functions.js";
export declare const empty: KeyedContainers.TypeClass<ReadonlyArrayContainer>["empty"];
export declare const entries: KeyedContainers.TypeClass<ReadonlyArrayContainer>["entries"];
interface Enumerate extends Containers.TypeClass<ReadonlyArrayContainer> {
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
export declare const everySatisfy: RunnableContainers.TypeClass<ReadonlyArrayContainer>["everySatisfy"];
export declare const first: RunnableContainers.TypeClass<ReadonlyArrayContainer>["first"];
interface Flow extends Containers.TypeClass<ReadonlyArrayContainer> {
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
export declare const forEach: KeyedContainers.TypeClass<ReadonlyArrayContainer>["forEach"];
export declare const forEachWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["forEachWithKey"];
export declare const fromEnumerable: Containers.TypeClass<ReadonlyArrayContainer>["fromEnumerable"];
export declare const fromIterable: Containers.TypeClass<ReadonlyArrayContainer>["fromIterable"];
export declare const fromOptional: Containers.TypeClass<ReadonlyArrayContainer>["fromOptional"];
export declare const fromReadonlyArray: KeyedContainers.TypeClass<ReadonlyArrayContainer>["fromReadonlyArray"];
export declare const fromRunnable: Containers.TypeClass<ReadonlyArrayContainer>["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: KeyedContainers.TypeClass<ReadonlyArrayContainer>["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keep"];
export declare const keepType: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepType"];
export declare const keepWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepWithKey"];
export declare const last: RunnableContainers.TypeClass<ReadonlyArrayContainer>["last"];
export declare const map: KeyedContainers.TypeClass<ReadonlyArrayContainer>["map"];
export declare const mapWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["mapWithKey"];
export declare const someSatisfy: RunnableContainers.TypeClass<ReadonlyArrayContainer>["someSatisfy"];
interface ToEnumerable extends Containers.TypeClass<ReadonlyArrayContainer> {
    /**
     * @category Transform
     */
    toEnumerable<T>(options?: {
        readonly start: number;
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
}
export declare const toEnumerable: ToEnumerable["toEnumerable"];
interface ToIterable extends Containers.TypeClass<ReadonlyArrayContainer> {
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export declare const toIterable: ToIterable["toIterable"];
interface ToObservable extends Containers.TypeClass<ReadonlyArrayContainer> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArray<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: KeyedContainers.TypeClass<ReadonlyArrayContainer>["toReadonlyArray"];
interface ToRunnable extends Containers.TypeClass<ReadonlyArrayContainer> {
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
