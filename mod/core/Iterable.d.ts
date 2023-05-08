import { Container, DisposableLike, EnumerableContainer, IterableContainer, ObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike } from "../core.js";
import { Function1 } from "../functions.js";
export declare const enumerate: EnumerableContainer.TypeClass<IterableContainer>["enumerate"];
interface Flow extends Container.TypeClass<IterableContainer> {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const fromReadonlyArray: Container.TypeClass<IterableContainer>["fromReadonlyArray"];
export declare const identity: Container.TypeClass<IterableContainer>["identity"];
export declare const toEnumerable: Container.TypeClass<IterableContainer>["toEnumerable"];
interface ToObservable extends Container.TypeClass<IterableContainer> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: Container.TypeClass<IterableContainer>["toReadonlyArray"];
interface ToRunnable extends Container.TypeClass<IterableContainer> {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
