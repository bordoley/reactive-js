/// <reference types="node" resolution-mode="require"/>
import { Readable, Writable } from "stream";
import { Factory, Function1 } from "../../functions.js";
import { DeferredObservableLike, DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
interface NodeStreamModule {
    flow(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<Factory<Readable> | Readable, PauseableObservableLike<Uint8Array> & DisposableLike>;
    sinkInto(factory: Writable | Factory<Writable>): Function1<PauseableObservableLike<Uint8Array>, DeferredObservableLike<void>>;
}
type Signature = NodeStreamModule;
export declare const flow: Signature["flow"];
export declare const sinkInto: Signature["sinkInto"];
export {};
