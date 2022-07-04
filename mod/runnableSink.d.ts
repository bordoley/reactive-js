import { Disposable } from "./disposable.mjs";
import { SinkLike } from "./sink.mjs";
declare class RunnableSink<T> extends Disposable implements SinkLike<T> {
    get T(): T;
    get TContainerOf(): this;
    assertState(this: this): void;
    notify(_: T): void;
}
export { RunnableSink };
