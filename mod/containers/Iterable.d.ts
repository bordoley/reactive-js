import { Enumerate, FromReadonlyArray, Identity, IterableLike, ToReadonlyArray } from "../containers.js";
import { Function1 } from "../functions.js";
import type * as Rx from "../rx.js";
import { ObservableLike, RunnableLike, ToEnumerable } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../util.js";
export declare const enumerate: Enumerate<IterableLike>["enumerate"];
interface Flow extends Rx.Flow<IterableLike> {
    /** @category Transform */
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<IterableLike<T>, Rx.PauseableObservableLike<T> & DisposableLike>;
}
export declare const flow: Flow["flow"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
export declare const identity: Identity<IterableLike>["identity"];
export declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
interface ToObservable extends Rx.ToObservable<IterableLike> {
    /** @category Transform */
    toObservable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<IterableLike<T>, ObservableLike<T>>;
}
export declare const toObservable: ToObservable["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"];
interface ToRunnable extends Rx.ToRunnable<IterableLike> {
    /** @category Transform */
    toRunnable: <T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }) => Function1<IterableLike<T>, RunnableLike<T>>;
}
export declare const toRunnable: ToRunnable["toRunnable"];
export {};
