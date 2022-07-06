import { Disposable } from "./disposable.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
declare class RunnableSink<T> extends Disposable implements ReactiveSinkLike<T> {
    get TLiftableContainerStateType(): 0;
    assertState(this: this): void;
    notify(_: T): void;
}
export { RunnableSink };
