import { DisposableLike, IterableContainer, ObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike } from "../core.js";
import { Function1 } from "../functions.js";
export declare const enumerate: IterableContainer.TypeClass["enumerate"];
interface Flow extends IterableContainer.TypeClass {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const fromReadonlyArray: IterableContainer.TypeClass["fromReadonlyArray"];
export declare const identity: IterableContainer.TypeClass["identity"];
export declare const toEnumerable: IterableContainer.TypeClass["toEnumerable"];
interface ToObservable extends IterableContainer.TypeClass {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: IterableContainer.TypeClass["toReadonlyArray"];
interface ToRunnable extends IterableContainer.TypeClass {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
