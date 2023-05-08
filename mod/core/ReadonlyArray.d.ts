import { Container, DisposableLike, EnumerableLike, EnumeratorLike, KeyedContainer, ObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, ReadonlyArrayContainer, RunnableLike, SchedulerLike } from "../core.js";
import { Function1 } from "../functions.js";
export declare const empty: KeyedContainer.TypeClass<ReadonlyArrayContainer>["empty"];
export declare const entries: KeyedContainer.TypeClass<ReadonlyArrayContainer>["entries"];
interface Enumerate extends Container.TypeClass<ReadonlyArrayContainer> {
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
export declare const everySatisfy: Container.TypeClass<ReadonlyArrayContainer>["everySatisfy"];
export declare const first: Container.TypeClass<ReadonlyArrayContainer>["first"];
interface Flow extends Container.TypeClass<ReadonlyArrayContainer> {
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
export declare const forEach: KeyedContainer.TypeClass<ReadonlyArrayContainer>["forEach"];
export declare const forEachWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["forEachWithKey"];
export declare const fromEnumerable: Container.TypeClass<ReadonlyArrayContainer>["fromEnumerable"];
export declare const fromIterable: Container.TypeClass<ReadonlyArrayContainer>["fromIterable"];
export declare const fromOptional: Container.TypeClass<ReadonlyArrayContainer>["fromOptional"];
export declare const fromReadonlyArray: KeyedContainer.TypeClass<ReadonlyArrayContainer>["fromReadonlyArray"];
export declare const fromRunnable: Container.TypeClass<ReadonlyArrayContainer>["fromRunnable"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const identity: KeyedContainer.TypeClass<ReadonlyArrayContainer>["identity"];
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keep"];
export declare const keepType: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepType"];
export declare const keepWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepWithKey"];
export declare const last: Container.TypeClass<ReadonlyArrayContainer>["last"];
export declare const map: KeyedContainer.TypeClass<ReadonlyArrayContainer>["map"];
export declare const mapWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["mapWithKey"];
export declare const someSatisfy: Container.TypeClass<ReadonlyArrayContainer>["someSatisfy"];
interface ToEnumerable extends Container.TypeClass<ReadonlyArrayContainer> {
    /**
     * @category Transform
     */
    toEnumerable<T>(options?: {
        readonly start: number;
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
}
export declare const toEnumerable: ToEnumerable["toEnumerable"];
interface ToIterable extends Container.TypeClass<ReadonlyArrayContainer> {
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export declare const toIterable: ToIterable["toIterable"];
interface ToObservable extends Container.TypeClass<ReadonlyArrayContainer> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }) => Function1<ReadonlyArray<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: KeyedContainer.TypeClass<ReadonlyArrayContainer>["toReadonlyArray"];
interface ToRunnable extends Container.TypeClass<ReadonlyArrayContainer> {
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
