import { Readable } from "stream";
import { PauseableEventSourceLike, ProducerWithSideEffectsLike } from "../computations.js";
import { ConsumerLike, DisposableLike } from "../utils.js";
export interface ProducerModule {
    create<T>(f: (consumer: ConsumerLike<T>) => void): ProducerWithSideEffectsLike<T>;
    toEventSource(readable: Readable): PauseableEventSourceLike<Uint8Array> & DisposableLike;
}
export type Signature = ProducerModule;
export declare const create: Signature["create"];
