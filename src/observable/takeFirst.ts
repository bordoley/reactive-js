import { TakeFirst } from "../container";
import { ObservableLike, ObservableOperator } from "../observable";
import { createTakeFirstOperator } from "../source";
import { fromArrayT } from "./fromArray";
import { liftSynchronousT } from "./lift";
import { Observer } from "./observer";

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = createTakeFirstOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class TakeFirstObserver<T> extends Observer<T> {
    count = 0;

    constructor(readonly delegate: Observer<T>, readonly maxCount: number) {
      super(delegate);
    }
  },
);

export const takeFirstT: TakeFirst<ObservableLike<unknown>> = {
  takeFirst,
};
