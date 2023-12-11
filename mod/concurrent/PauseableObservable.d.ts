import { DeferredObservableLike, DispatcherLike, PauseableObservableLike, SchedulerLike } from "../concurrent.js";
import { Function1 } from "../functions.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface PauseableObservableModule {
    fromAsyncIterable<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<AsyncIterable<T>, PauseableObservableLike<T>>;
    sinkInto<T>(sink: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}
export type Signature = PauseableObservableModule;
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const sinkInto: Signature["sinkInto"];
