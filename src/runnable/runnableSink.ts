import { getDelegate } from "../__internal__.delegating";
import { __DEV__ } from "../__internal__.env";
import { newInstance, pipe } from "../functions";
import { notify } from "../reactiveSink";
import { RunnableSink } from "../runnableSink";

export class AbstractDelegatingRunnableSink<
  TIn,
  TOut,
> extends RunnableSink<TIn> {
  constructor(readonly delegate: RunnableSink<TOut>) {
    super();
  }

  notify(_: TIn) {}
}

class DelegatingRunnableSink<T> extends AbstractDelegatingRunnableSink<T, T> {
  notify(next: T) {
    pipe(this, getDelegate, notify(next));
  }
}

export const createDelegatingRunnableSink = <T>(
  delegate: RunnableSink<T>,
): RunnableSink<T> => newInstance(DelegatingRunnableSink, delegate);
