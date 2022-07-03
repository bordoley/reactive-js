import { AbstractDisposableContainer } from "./container.mjs";
import { SinkLike } from "./sink.mjs";
declare class RunnableSink<T> extends AbstractDisposableContainer implements SinkLike<T> {
    assertState(this: this): void;
    notify(_: T): void;
}
declare class AbstractDelegatingRunnableSink<TIn, TOut> extends RunnableSink<TIn> {
    readonly delegate: RunnableSink<TOut>;
    constructor(delegate: RunnableSink<TOut>);
    notify(_: TIn): void;
}
declare const createDelegatingRunnableSink: <T>(delegate: RunnableSink<T>) => RunnableSink<T>;
export { AbstractDelegatingRunnableSink, RunnableSink, createDelegatingRunnableSink };
