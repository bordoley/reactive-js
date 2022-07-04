import { AbstractDisposableContainer } from "./container.mjs";
import { SinkLike } from "./sink.mjs";
declare class RunnableSink<T> extends AbstractDisposableContainer implements SinkLike<T> {
    assertState(this: this): void;
    notify(_: T): void;
}
export { RunnableSink };
