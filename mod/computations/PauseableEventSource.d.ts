import { EventSourceLike, PauseableEventSourceLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike, QueueableLike } from "../utils.js";
interface PauseableEventSourceModule {
    create<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, EventSourceLike<T>>): PauseableEventSourceLike<T> & DisposableLike;
    dispatchTo<T>(dispatcher: QueueableLike<T>): Function1<PauseableEventSourceLike<T>, EventSourceLike<T> & DisposableLike>;
}
export type Signature = PauseableEventSourceModule;
export declare const create: Signature["create"];
export declare const dispatchTo: Signature["dispatchTo"];
export {};
