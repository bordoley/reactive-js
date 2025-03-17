import { Readable } from "stream";
import { PauseableEventSourceLike, ProducerWithSideEffectsLike } from "../computations.js";
import { DisposableLike } from "../utils.js";
interface NodeReadable {
    toEventSource(readable: Readable): PauseableEventSourceLike<Uint8Array> & DisposableLike;
    toProducer(readable: Readable): ProducerWithSideEffectsLike<Uint8Array>;
}
type Signature = NodeReadable;
export declare const toProducer: Signature["toProducer"];
export declare const toEventSource: Signature["toEventSource"];
export {};
