import { AbstractDisposableLiftable, LiftableStateLike } from "./liftable.mjs";
import { ObservableOperator } from "./observable.mjs";
import { Observer } from "./observer.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./streamable.mjs";
declare class AsyncEnumerator<T> extends AbstractDisposableLiftable<Observer<T>> implements LiftableStateLike, StreamLike<void, T> {
    readonly op: ObservableOperator<void, T>;
    readonly scheduler: SchedulerLike;
    private readonly dispatcher;
    private readonly observable;
    constructor(op: ObservableOperator<void, T>, scheduler: SchedulerLike, replay: number);
    get observerCount(): number;
    get replay(): number;
    dispatch(req: void): void;
    sink(observer: Observer<T>): void;
}
export { AsyncEnumerator };
