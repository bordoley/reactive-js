import { empty } from "../container";
import { Error, addTeardown, dispose } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { Option, isSome } from "../option";
import { notifyTakeLast } from "../sink";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractDelegatingObserver, sink } from "./observer";

function onDispose(this: TakeLastObserver<unknown>, error: Option<Error>) {
  if (isSome(error)) {
    this.last.length = 0;
    pipe(this.delegate, dispose(error));
  } else {
    pipe(this.last, fromArray(), sink(this.delegate));
  }
}

class TakeLastObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly last: T[] = [];

  constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
    super(delegate);
    addTeardown(this, onDispose);
  }
}
TakeLastObserver.prototype.notify = notifyTakeLast;

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (observer: ObserverLike<T>) =>
    new TakeLastObserver(observer, count);
  operator.isSynchronous = false;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
