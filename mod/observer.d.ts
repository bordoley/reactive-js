import { AbstractDisposableContainer } from "./container.mjs";
import { DispatcherLike } from "./dispatcher.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { SinkLike } from "./source.mjs";
/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
declare class Observer<T> extends AbstractDisposableContainer implements SinkLike<T> {
    readonly scheduler: SchedulerLike;
    private _dispatcher;
    constructor(scheduler: SchedulerLike);
    get dispatcher(): DispatcherLike<T>;
    assertState(this: Observer<T>): void;
    notify(_: T): void;
}
declare const createDelegatingObserver: <T>(delegate: Observer<T>) => Observer<T>;
declare const scheduler: <T>(observer: Observer<T>) => SchedulerLike;
export { Observer, createDelegatingObserver, scheduler };
