import { Readable, Writable } from "stream";
import { Factory, Function1 } from "../../functions.js";
import { DisposableLike, ObservableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
export declare const flow: (scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<Factory<Readable> | Readable, PauseableObservableLike<Uint8Array> & DisposableLike>;
export declare const sinkInto: (factory: Writable | Factory<Writable>) => Function1<PauseableObservableLike<Uint8Array>, ObservableLike<void>>;
