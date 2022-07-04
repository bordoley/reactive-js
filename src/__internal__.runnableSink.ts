import { __DEV__ } from "./__internal__.env";
import { getDelegate } from "./__internal__.liftable";
import { newInstance, pipe } from "./functions";
import { RunnableSink } from "./runnableSink";
import { notify } from "./sink";

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
