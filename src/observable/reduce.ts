import { Error, addTeardown } from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { Option, isSome } from "../option";
import { fromValue } from "../container";
import { lift } from "./lift";
import { AbstractDelegatingObserver, observe } from "./observer";
import { fromArrayT } from "./fromArray";
import { notifyReduce } from "../sink";

function onDispose(
  this: ReduceObserver<unknown, unknown>,
  error: Option<Error>,
) {
  if (isSome(error)) {
    this.delegate.dispose();
  } else {
    pipe(this.acc, fromValue(fromArrayT), observe(this.delegate));
  }
}

class ReduceObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
  constructor(
    delegate: ObserverLike<TAcc>,
    readonly reducer: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
    addTeardown(this, onDispose);
  }
}
ReduceObserver.prototype.notify = notifyReduce;

export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (observer: ObserverLike<TAcc>) =>
    new ReduceObserver(observer, reducer, initialValue());
  operator.isSynchronous = true;
  return lift(operator);
};
