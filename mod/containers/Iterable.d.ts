import { Enumerate, FromReadonlyArray, Identity, IterableContainerLike, ToReadonlyArray } from "../containers.js";
import { Function1 } from "../functions.js";
import type * as Rx from "../rx.js";
import { ObservableLike, RunnableLike, ToEnumerable } from "../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const enumerate: Enumerate<IterableContainerLike>["enumerate"];
interface Flow extends Rx.Flow<IterableContainerLike> {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<IterableContainerLike<T>, Rx.PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableContainerLike>["fromReadonlyArray"];
export declare const identity: Identity<IterableContainerLike>["identity"];
export declare const toEnumerable: ToEnumerable<IterableContainerLike>["toEnumerable"];
interface ToObservable extends Rx.ToObservable<IterableContainerLike> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<IterableContainerLike>["toReadonlyArray"];
interface ToRunnable extends Rx.ToRunnable<IterableContainerLike> {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
