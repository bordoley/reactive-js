import { raise } from "../functions";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";

export abstract class AbstractRunnable<T> implements RunnableLike<T> {
  get T(): T {
    return raise();
  }

  get TContainerOf(): RunnableLike<this["T"]> {
    return this;
  }

  get TLiftableState(): RunnableSink<this["T"]> {
    return raise();
  }

  abstract sink(this: RunnableLike<T>, sink: RunnableSink<T>): void;
}
