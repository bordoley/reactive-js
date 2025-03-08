import { EventSourceLike, PauseableEventSourceLike, SynchronousObservableLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { BackpressureStrategy, DisposableLike, SchedulerLike } from "../utils.js";
interface PauseableEventSource {
    create<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, EventSourceLike<T>>): PauseableEventSourceLike<T>;
    fromSynchronousObservable<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<SynchronousObservableLike<T>, PauseableEventSourceLike<T>>;
}
export type Signature = PauseableEventSource;
export declare const create: Signature["create"];
export declare const fromSynchronousObservable: Signature["fromSynchronousObservable"];
export {};
