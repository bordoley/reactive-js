import { RunnableSink } from "./runnableSink.mjs";
declare class AbstractDelegatingRunnableSink<TIn, TOut> extends RunnableSink<TIn> {
    readonly delegate: RunnableSink<TOut>;
    constructor(delegate: RunnableSink<TOut>);
    notify(_: TIn): void;
}
declare const createDelegatingRunnableSink: <T>(delegate: RunnableSink<T>) => RunnableSink<T>;
export { AbstractDelegatingRunnableSink, createDelegatingRunnableSink };
