import { DispatcherLike } from "./dispatcher.mjs";
import { Disposable } from "./disposable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { SinkLike } from "./sink.mjs";
/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
declare class Observer<T> extends Disposable implements SinkLike<T> {
    readonly scheduler: SchedulerLike;
    private _dispatcher;
    constructor(scheduler: SchedulerLike);
    get T(): T;
    get TContainerOf(): this;
    get dispatcher(): DispatcherLike<T>;
    assertState(this: Observer<T>): void;
    notify(_: T): void;
}
declare const getScheduler: <T>(observer: Observer<T>) => SchedulerLike;
declare const getDispatcher: <T>(observer: Observer<T>) => DispatcherLike<T>;
export { Observer, getDispatcher, getScheduler };
