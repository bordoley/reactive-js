import { DispatcherLike } from "./dispatcher.mjs";
import { AbtractDisposableLiftable, LiftableStateLike } from "./liftable.mjs";
import { ObservableLike } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare abstract class AsyncEnumerator<T> extends AbtractDisposableLiftable<Observer<T>> implements LiftableStateLike, StreamLike<void, T> {
    abstract scheduler: SchedulerLike;
    abstract observerCount: number;
    abstract replay: number;
    isEnumerable?: false;
    abstract dispatch(this: DispatcherLike<void>, req: void): void;
    abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}
export { AsyncEnumerator };
