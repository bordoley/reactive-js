import { raise } from "../functions";
import { ObservableLike } from "../observable";
import { Observer } from "../observer";

export abstract class AbstractObservable<T> implements ObservableLike<T> {
  get T() {
    return raise();
  }

  get TContainerOf(): ObservableLike<this["T"]> {
    return this;
  }

  get TLiftableState(): Observer<this["T"]> {
    return raise();
  }

  readonly isEnumerable?: boolean;

  abstract sink(this: ObservableLike<T>, sink: Observer<T>): void;
}

export const isEnumerable = (obs: ObservableLike<unknown>) =>
  obs.isEnumerable ?? false;

export const tagEnumerable =
  <T>(isEnumerable: boolean) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    (obs as any).isEnumerable = isEnumerable;
    return obs;
  };
