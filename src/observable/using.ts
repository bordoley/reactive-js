import { ObservableLike } from "../observable";
import { Observer } from "./observer";
import { AbstractSource, createUsing } from "../source";
import { DisposableLike } from "../disposable";
import { Function1 } from "../functions";

export const using = createUsing(
  class UsingObservable<TResource extends DisposableLike, T>
    extends AbstractSource<T, Observer<T>>
    implements ObservableLike<T>
  {
    readonly isSynchronous = false;

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
