import { Readable, Writable } from "stream";
import { PauseableEventSourceLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
interface FlowableStreamModule {
    create(factory: Readable): PauseableEventSourceLike<Uint8Array>;
    writeTo(writable: Writable): Function1<PauseableEventSourceLike<Uint8Array>, DisposableLike>;
}
type Signature = FlowableStreamModule;
export declare const create: Signature["create"];
export declare const writeTo: Signature["writeTo"];
export {};
