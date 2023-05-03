import { Container, IterableContainer } from "../containers.js";
import { Function1 } from "../functions.js";
import { ObservableLike, PauseableObservableLike, Reactive, RunnableLike } from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const enumerate: Container.Enumerate<IterableContainer>["enumerate"];
interface Flow extends Reactive.Flow<IterableContainer> {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const fromReadonlyArray: Container.FromReadonlyArray<IterableContainer>["fromReadonlyArray"];
export declare const identity: Container.Identity<IterableContainer>["identity"];
export declare const toEnumerable: Reactive.ToEnumerable<IterableContainer>["toEnumerable"];
interface ToObservable extends Reactive.ToObservable<IterableContainer> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: Container.ToReadonlyArray<IterableContainer>["toReadonlyArray"];
interface ToRunnable extends Reactive.ToRunnable<IterableContainer> {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
