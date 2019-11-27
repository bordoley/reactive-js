import { AsyncIteratorLike } from "@reactive-js/ix-async-iterator";

export interface StateUpdater<T> {
  (oldState: T): T;
}

/** @noInheritDoc */
export interface StateContainerLike<T>
  extends AsyncIteratorLike<StateUpdater<T>, T> {}