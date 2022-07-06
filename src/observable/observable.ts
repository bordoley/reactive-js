import { raise } from "../functions";
import {
  DefaultObservable,
  EnumerableObservable,
  ObservableLike,
  RunnableObservable,
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

export const isEnumerable = (obs: ObservableLike<unknown>) =>
  obs.observableType === 2 ?? false;

export const tagEnumerable =
  <T>(isEnumerable: boolean) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).observableType = isEnumerable ? 2 : 0;
    return obs;
  };
