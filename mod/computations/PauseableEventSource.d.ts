import { EventSourceLike, PauseableEventSourceLike, ProducerLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
interface PauseableEventSourceModule {
    create<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, EventSourceLike<T>>): PauseableEventSourceLike<T> & DisposableLike;
    toProducer<T>(): Function1<PauseableEventSourceLike<T>, ProducerLike<T>>;
}
export type Signature = PauseableEventSourceModule;
export declare const create: Signature["create"];
export declare const toProducer: Signature["toProducer"];
export {};
