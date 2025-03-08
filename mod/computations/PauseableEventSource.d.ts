import { EventSourceLike, PauseableEventSourceLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
interface PauseableEventSource {
    create<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, EventSourceLike<T>>): PauseableEventSourceLike<T>;
}
export type Signature = PauseableEventSource;
export declare const create: Signature["create"];
export {};
