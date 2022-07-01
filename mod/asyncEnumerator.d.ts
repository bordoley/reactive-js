import { DispatcherLike } from "./dispatcher.mjs";
import { DisposableLiftable, LiftableStateLike } from "./liftable.mjs";
import { ObservableLike } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare abstract class AsyncEnumerator<T> extends DisposableLiftable<Observer<T>> implements LiftableStateLike, StreamLike<void, T> {
    abstract scheduler: SchedulerLike;
    abstract observerCount: number;
    abstract replay: number;
    isEnumerable?: false;
    abstract dispatch(this: DispatcherLike<void>, req: void): void;
    abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}
declare abstract class AbstractDelegatingAsyncEnumerator<TA, TB> extends AsyncEnumerator<TB> implements StreamLike<void, TB> {
    readonly delegate: StreamLike<void, TA>;
    constructor(delegate: StreamLike<void, TA>);
    get observerCount(): number;
    get replay(): number;
    get scheduler(): SchedulerLike;
    dispatch(req: void): void;
    abstract sink(observer: Observer<TB>): void;
}
export { AbstractDelegatingAsyncEnumerator, AsyncEnumerator };
