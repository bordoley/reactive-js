import { DispatcherLike } from "./dispatcher.mjs";
import { Disposable } from "./disposable.mjs";
import { InteractiveSourceLike } from "./interactiveSource.mjs";
import { ObservableLike } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare abstract class AsyncEnumerator<T> extends Disposable implements InteractiveSourceLike, StreamLike<void, T> {
    get T(): T;
    get TContainerOf(): this;
    get TLiftableContainerState(): Observer<this["T"]>;
    get TLiftableContainerStateType(): 1;
    abstract scheduler: SchedulerLike;
    abstract observerCount: number;
    abstract replay: number;
    isEnumerable?: false;
    abstract dispatch(this: DispatcherLike<void>, req: void): void;
    abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
    move(): void;
}
export { AsyncEnumerator };
