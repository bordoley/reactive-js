import { AbstractDisposableContainer } from "./container.mjs";
import { SinkLike } from "./source.mjs";
declare class RunnableSink<T> extends AbstractDisposableContainer implements SinkLike<T> {
    assertState(this: this): void;
    notify(_: T): void;
}
declare const createDelegatingRunnableSink: <T>(delegate: RunnableSink<T>) => RunnableSink<T>;
export { RunnableSink, createDelegatingRunnableSink };
