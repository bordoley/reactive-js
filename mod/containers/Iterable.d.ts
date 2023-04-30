import { Enumerate, FromReadonlyArray, Identity, IterableContainer, ToReadonlyArray } from "../containers.js";
import { Function1 } from "../functions.js";
import type * as Rx from "../rx.js";
import { ObservableLike, RunnableLike, ToEnumerable } from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const enumerate: Enumerate<IterableContainer>["enumerate"];
interface Flow extends Rx.Flow<IterableContainer> {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, Rx.PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableContainer>["fromReadonlyArray"];
export declare const identity: Identity<IterableContainer>["identity"];
export declare const toEnumerable: ToEnumerable<IterableContainer>["toEnumerable"];
interface ToObservable extends Rx.ToObservable<IterableContainer> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<IterableContainer>["toReadonlyArray"];
interface ToRunnable extends Rx.ToRunnable<IterableContainer> {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
