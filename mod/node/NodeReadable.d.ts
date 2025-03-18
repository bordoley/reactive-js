import { Readable } from "stream";
import { EventSourceLike, ProducerWithSideEffectsLike } from "../computations.js";
import { DisposableLike, PauseableLike } from "../utils.js";
interface NodeReadable {
    toEventSource(readable: Readable): PauseableLike & EventSourceLike<Uint8Array> & DisposableLike;
    toProducer(readable: Readable): ProducerWithSideEffectsLike<Uint8Array>;
}
type Signature = NodeReadable;
export declare const toProducer: Signature["toProducer"];
export declare const toEventSource: Signature["toEventSource"];
export {};
