import { Function1 } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableLike, DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
export type Type = AsyncIterableContainer;
export interface AsyncIterableModule {
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<AsyncIterable<T>, PauseableObservableLike<T> & DisposableLike>;
    toObservable<T>(): Function1<AsyncIterable<T>, DeferredObservableLike<T>>;
}
export type Signature = AsyncIterableModule;
export declare const flow: Signature["flow"];
export declare const toObservable: Signature["toObservable"];
