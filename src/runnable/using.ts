import { DisposableLike } from "../disposable";
import { Function1 } from "../functions";
import { RunnableLike } from "../runnable";
import { AbstractSource, createUsing } from "../source";
import { Sink } from "./sinks";

export const using = createUsing(
  class UsingObservable<TResource extends DisposableLike, T>
    extends AbstractSource<T, Sink<T>>
    implements RunnableLike<T>
  {
    readonly isSynchronous = false;

    constructor(
      readonly resourceFactory: Function1<
        Sink<T>,
        TResource | readonly TResource[]
      >,
      readonly sourceFactory: (
        ...resources: readonly TResource[]
      ) => RunnableLike<T>,
    ) {
      super();
    }

    sink(_: Sink<T>) {}
  },
);
