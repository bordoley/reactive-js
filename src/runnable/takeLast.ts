import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { empty } from "../container";
import { Option, isSome } from "../option";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sink";
import { addTeardown, dispose, Error } from "../disposable";
import { SinkLike } from "../sink";

function onDispose(this: TakeLastSink<unknown>, error: Option<Error>) {
  if (isSome(error)) {
    this.last.length = 0;
    pipe(this.delegate, dispose(error));
  } else {
    fromArray()(this.last).run(this.delegate);
  }
}

class TakeLastSink<T> extends AbstractDelegatingSink<T, T> {
  readonly last: T[] = [];

  constructor(delegate: SinkLike<T>, readonly maxCount: number) {
    super(delegate);
    addTeardown(this, onDispose);
  }

  notify(next: T) {
    this.assertState(this);

    const last = this.last;

    last.push(next);

    if (last.length > this.maxCount) {
      last.shift();
    }
  }
}

export const takeLast = <T>(
  options: { readonly count?: number } = {},
): RunnableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (sink: SinkLike<T>) => new TakeLastSink(sink, count);
  return runnable =>
    count > 0 ? pipe(runnable, lift(operator)) : empty(fromArrayT);
};
