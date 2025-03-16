import { Readable } from "stream";
import { PauseableEventSourceLike } from "../computations.js";
import { DisposableLike } from "../utils.js";
interface NodeReadable {
    toPauseableEventSource(readable: Readable): PauseableEventSourceLike<Uint8Array> & DisposableLike;
}
type Signature = NodeReadable;
export declare const toPauseableEventSource: Signature["toPauseableEventSource"];
export {};
