import { ContainerLike } from "./container.mjs";
import { DispatcherLike } from "./dispatcher.mjs";
import { Disposable } from "./disposable.mjs";
import { ObservableLike } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare abstract class AsyncEnumerator<T> extends Disposable implements ContainerLike, StreamLike<void, T> {
    get T(): T;
    get TContainerOf(): this;
    get TLiftableState(): Observer<this["T"]>;
    abstract scheduler: SchedulerLike;
    abstract observerCount: number;
    abstract replay: number;
    isEnumerable?: false;
    abstract dispatch(this: DispatcherLike<void>, req: void): void;
    abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}
export { AsyncEnumerator };
