import { fromValue } from "../container";
import { Error, addDisposable, addTeardown } from "../disposable";
import { Factory, Reducer, pipe } from "../functions";
import { ObservableOperator } from "../observable";
import { Option, isSome } from "../option";
import { notifyReduce } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Observer, sink } from "./observer";

function onDispose(
  this: ReduceObserver<unknown, unknown>,
  error: Option<Error>,
) {
  if (isSome(error)) {
    this.delegate.dispose();
  } else {
    pipe(this.acc, fromValue(fromArrayT), sink(this.delegate));
  }
}

class ReduceObserver<T, TAcc> extends Observer<T> {
  constructor(
    readonly delegate: Observer<TAcc>,
    readonly reducer: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }
}
ReduceObserver.prototype.notify = notifyReduce;

export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (delegate: Observer<TAcc>) => {
    const observer = new ReduceObserver(delegate, reducer, initialValue());
    addDisposable(delegate, observer);
    addTeardown(observer, onDispose);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};
