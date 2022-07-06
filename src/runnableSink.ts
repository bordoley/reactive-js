import { __DEV__ } from "./__internal__.env";
import { Disposable, isDisposed } from "./disposable";
import { raise } from "./functions";
import { reactive } from "./liftable";
import { ReactiveSinkLike } from "./reactiveSink";

export class RunnableSink<T> extends Disposable implements ReactiveSinkLike<T> {
  get TLiftableContainerStateType() {
    return reactive;
  }

  assertState(this: this): void {}

  notify(_: T): void {}
}
if (__DEV__) {
  RunnableSink.prototype.assertState = function <T>(this: RunnableSink<T>) {
    if (isDisposed(this)) {
      raise("RunnableSink is disposed");
    }
  };
}
