import { Observer } from "./observer.mjs";
declare class AbstractDelegatingObserver<TIn, TOut> extends Observer<TIn> {
    readonly delegate: Observer<TOut>;
    constructor(delegate: Observer<TOut>);
    notify(_: TIn): void;
}
declare const createDelegatingObserver: <T>(delegate: Observer<T>) => Observer<T>;
export { AbstractDelegatingObserver, createDelegatingObserver };
