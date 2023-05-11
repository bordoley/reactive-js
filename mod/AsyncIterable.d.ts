import { Function1 } from "./functions.js";
import { AsyncIterableContainer, DeferredObservableLike, DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "./types.js";
export type Type = AsyncIterableContainer;
export interface Signature {
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<AsyncIterable<T>, PauseableObservableLike<T> & DisposableLike>;
    toDeferredObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableLike<T>>;
}
export declare const flow: Signature["flow"];
export declare const toDeferredObservable: Signature["toDeferredObservable"];
