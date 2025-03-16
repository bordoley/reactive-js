import { Writable } from "stream";
import { Function1 } from "../functions.js";
import { ConsumerLike } from "../utils.js";
interface NodeWritable {
    toConsumer(options?: {
        autoDispose?: boolean;
    }): Function1<Writable, ConsumerLike<Uint8Array>>;
}
type Signature = NodeWritable;
export declare const toConsumer: Signature["toConsumer"];
export {};
