import { Disposable } from "./disposable.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
declare class RunnableSink<T> extends Disposable implements ReactiveSinkLike<T> {
    get T(): T;
    get TContainerOf(): this;
    assertState(this: this): void;
    notify(_: T): void;
}
export { RunnableSink };
