import { Function1 } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableLike, DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
export interface Signature {
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<AsyncIterable<T>, PauseableObservableLike<T> & DisposableLike>;
    toDeferredObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableLike<T>>;
}
export declare const flow: Signature["flow"];
export declare const toDeferredObservable: Signature["toDeferredObservable"];
