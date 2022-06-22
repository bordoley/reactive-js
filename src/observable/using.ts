import { Using } from "../container";
import { DisposableLike } from "../disposable";
import { Function1 } from "../functions";
import { ObservableLike } from "../observable";
import { AbstractSource, createUsing } from "../source";
import { Observer } from "./observer";

export const using = createUsing(
  class UsingObservable<TResource extends DisposableLike, T>
    extends AbstractSource<T, Observer<T>>
    implements ObservableLike<T>
  {
    constructor(
      readonly resourceFactory: Function1<
        Observer<T>,
        TResource | readonly TResource[]
      >,
      readonly sourceFactory: (
        ...resources: readonly TResource[]
      ) => ObservableLike<T>,
    ) {
      super();
    }

    sink(_: Observer<T>) {}
  },
);

export const usingT: Using<ObservableLike<unknown>> = {
  using,
};
