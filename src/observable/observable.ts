import { raise } from "../functions";
import {
  DefaultObservable,
  EnumerableObservable,
  EnumerableObservableLike,
  ObservableLike,
  RunnableObservable,
  RunnableObservableLike,
} from "../observable";
import { Observer } from "../observer";

export abstract class AbstractObservable<T> implements ObservableLike<T> {
  get T() {
    return raise();
  }

  get TContainerOf(): ObservableLike<this["T"]> {
    return this;
  }

  get TLiftableContainerState(): Observer<this["T"]> {
    return raise();
  }

  abstract readonly observableType:
    | DefaultObservable
    | RunnableObservable
    | EnumerableObservable;

  abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}

export const isEnumerable = <T>(
  obs: ObservableLike<T>,
): obs is EnumerableObservableLike<T> => obs.observableType === 2;

export const isRunnable = <T>(
  obs: ObservableLike<T>,
): obs is RunnableObservableLike<T> => obs.observableType === 1;

export const tagEnumerable =
  <T>(isEnumerable: boolean) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).observableType = isEnumerable ? 2 : 0;
    return obs;
  };
