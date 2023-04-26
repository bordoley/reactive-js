import { Readable, Writable } from "stream";
import { Factory, Function1 } from "../../functions.js";
import { FlowableObservableLike, ObservableLike } from "../../rx.js";
import { SchedulerLike } from "../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../util.js";
export declare const flow: (scheduler: SchedulerLike, options?: {
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<Factory<Readable> | Readable, FlowableObservableLike<Uint8Array> & DisposableLike>;
export declare const sinkInto: (factory: Writable | Factory<Writable>) => (flowable: FlowableObservableLike<Uint8Array>) => ObservableLike<void>;
