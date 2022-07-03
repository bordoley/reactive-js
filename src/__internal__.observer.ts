import { __DEV__ } from "./__internal__.env";
import { getDelegate } from "./__internal__.liftable";
import { newInstance, pipe } from "./functions";
import { Observer, getScheduler } from "./observer";
import { __yield } from "./scheduler";
import { notify } from "./sink";

export class AbstractDelegatingObserver<TIn, TOut> extends Observer<TIn> {
  constructor(public readonly delegate: Observer<TOut>) {
    super(getScheduler(delegate));
  }

  notify(_: TIn) {}
}

class DelegatingObserver<T> extends AbstractDelegatingObserver<T, T> {
  notify(next: T) {
    pipe(this, getDelegate, notify(next));
  }
}

export const createDelegatingObserver = <T>(
  delegate: Observer<T>,
): Observer<T> => newInstance(DelegatingObserver, delegate);
