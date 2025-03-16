import { EventSourceLike, PauseableEventSourceLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { ConsumerLike, DisposableLike } from "../utils.js";
interface PauseableEventSourceModule {
    create<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, EventSourceLike<T>>): PauseableEventSourceLike<T> & DisposableLike;
    enqueue<T>(queue: ConsumerLike<T>): Function1<PauseableEventSourceLike<T>, EventSourceLike<T> & DisposableLike>;
}
export type Signature = PauseableEventSourceModule;
export declare const create: Signature["create"];
export declare const enqueue: Signature["enqueue"];
export {};
