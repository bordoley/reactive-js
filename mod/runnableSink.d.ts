import { Disposable } from "./disposable.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
declare class RunnableSink<T> extends Disposable implements ReactiveSinkLike<T> {
    assertState(this: this): void;
    notify(_: T): void;
}
export { RunnableSink };
