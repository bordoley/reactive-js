import { Readable } from "stream";
import { ProducerWithSideEffectsLike } from "../computations.js";
import { Factory } from "../functions.js";
interface NodeReadable {
    create(factory: Factory<Readable>): ProducerWithSideEffectsLike<Uint8Array>;
}
type Signature = NodeReadable;
export declare const create: Signature["create"];
export {};
