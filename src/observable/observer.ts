import { __DEV__ } from "../__internal__.env";
import { getDelegate } from "../__internal__.liftable";
import { newInstance, pipe } from "../functions";
import { Observer, getScheduler } from "../observer";
import { notify } from "../reactiveSink";
import { __yield } from "../scheduler";

export class AbstractDelegatingObserver<
  TIn,
  TOut,
  TObserver extends Observer<TOut> = Observer<TOut>,
> extends Observer<TIn> {
  constructor(public readonly delegate: TObserver) {
    super(getScheduler(delegate));
  }

  notify(_: TIn) {}
}

export class DelegatingObserver<
  T,
  TObserver extends Observer<T> = Observer<T>,
> extends AbstractDelegatingObserver<T, T, TObserver> {
  notify(next: T) {
    pipe(this, getDelegate, notify(next));
  }
}

export const createDelegatingObserver = <T>(
  delegate: Observer<T>,
): Observer<T> =>
  newInstance<DelegatingObserver<T>, Observer<T>>(DelegatingObserver, delegate);
