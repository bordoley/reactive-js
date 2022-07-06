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

  abstract sinkInto(this: ObservableLike<T>, sink: Observer<T>): void;
}

export const isEnumerable = <T>(
  obs: ObservableLike<T>,
): obs is EnumerableObservableLike<T> => obs.observableType === 2;

export const isRunnable = <T>(
  obs: ObservableLike<T>,
): obs is RunnableObservableLike<T> => obs.observableType === 1;

export const tagObservableType =
  <T>(tag: EnumerableObservable | RunnableObservable | DefaultObservable) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).observableType = tag;
    return obs;
  };

export const computeMinTag = (
  observables: readonly ObservableLike<unknown>[],
): EnumerableObservable | RunnableObservable | DefaultObservable => {
  let min: EnumerableObservable | RunnableObservable | DefaultObservable = 2;
  const { length } = observables;
  for (let i = 0; i < length; i++) {
    const { observableType } = observables[i];
    min = observableType < min ? observableType : min;
  }
  return min;
};
