import { __DEV__ } from "./__internal__.env";
import { AbstractDisposableContainer } from "./container";
import { isDisposed } from "./disposable";
import { raise } from "./functions";
import { SinkLike } from "./sink";

export class RunnableSink<T>
  extends AbstractDisposableContainer
  implements SinkLike<T>
{
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
