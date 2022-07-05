import { Observer } from "./observer.mjs";
declare class AbstractDelegatingObserver<TIn, TOut, TObserver extends Observer<TOut> = Observer<TOut>> extends Observer<TIn> {
    readonly delegate: TObserver;
    constructor(delegate: TObserver);
    notify(_: TIn): void;
}
declare class DelegatingObserver<T, TObserver extends Observer<T> = Observer<T>> extends AbstractDelegatingObserver<T, T, TObserver> {
    notify(next: T): void;
}
declare const createDelegatingObserver: <T>(delegate: Observer<T>) => Observer<T>;
export { AbstractDelegatingObserver, DelegatingObserver, createDelegatingObserver };
