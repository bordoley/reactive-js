import { DisposableContainer } from "./container.mjs";
import { DispatcherLike } from "./dispatcher.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { SinkLike } from "./source.mjs";
/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
declare class Observer<T> extends DisposableContainer implements SinkLike<T> {
    readonly scheduler: SchedulerLike;
    private _dispatcher;
    constructor(scheduler: SchedulerLike);
    get dispatcher(): DispatcherLike<T>;
    assertState(this: Observer<T>): void;
    notify(_: T): void;
}
declare class AbstractDelegatingObserver<TIn, TOut> extends Observer<TIn> {
    readonly delegate: Observer<TOut>;
    constructor(delegate: Observer<TOut>);
    notify(_: TIn): void;
}
declare const createDelegatingObserver: <T>(delegate: Observer<T>) => Observer<T>;
declare const getScheduler: <T>(observer: Observer<T>) => SchedulerLike;
declare const getDispatcher: <T>(observer: Observer<T>) => DispatcherLike<T>;
export { AbstractDelegatingObserver, Observer, createDelegatingObserver, getDispatcher, getScheduler };
