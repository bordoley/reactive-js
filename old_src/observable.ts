import { decorateMap } from "./__internal__.functions";
import {
  createCatchErrorOperator,
  createEverySatisfyOperator,
  createSomeSatisfyOperator,
  decorateWithCatchErrorNotify,
  decorateWithEverySatisfyNotify,
  decorateWithSomeSatisfyNotify,
} from "./__internal__.reactiveContainer";
import { EverySatisfy, SomeSatisfy } from "./container";
import { Predicate } from "./functions";
import { CatchError } from "./liftableContainer";
import { fromArrayT } from "./observable/fromArray";
import { liftEnumerableT } from "./observable/lift";
import {
  AbstractDelegatingObserver,
  decorateNotifyWithAssertions,
} from "./observable/observer";
import { ObserverLike } from "./observer";
import { __yield } from "./scheduler";

/**
 * The throttle mode used by the `throttle` operator.
 * first - Takes a leading value.
 * last - Takes the trailing value.
 * interval -  Takes both the leading and trailing values.
 */
export type ThrottleMode = "first" | "last" | "interval";

export { throttle } from "./observable/throttle";
export { timeout, timeoutError } from "./observable/timeout";

export const catchError: CatchError<ObservableLike<unknown>>["catchError"] =
  /*@__PURE__*/ decorateMap(
    class CatchErrorObserver<T> extends AbstractDelegatingObserver<T, T> {},
    decorateWithCatchErrorNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createCatchErrorOperator(liftEnumerableT),
  );

export const catchErrorT: CatchError<ObservableLike<unknown>> = {
  catchError,
};

export const everySatisfy: EverySatisfy<
  ObservableLike<unknown>
>["everySatisfy"] = /*@__PURE__*/ decorateMap(
  class EverySatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
    constructor(
      delegate: ObserverLike<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate);
    }
  },
  decorateWithEverySatisfyNotify<ObservableLike<unknown>>(),
  decorateNotifyWithAssertions,
  createEverySatisfyOperator({ ...fromArrayT, ...liftEnumerableT }),
);

export const everySatisfyT: EverySatisfy<ObservableLike<unknown>> = {
  everySatisfy,
};

export const someSatisfy: SomeSatisfy<ObservableLike<unknown>>["someSatisfy"] =
  /*@__PURE__*/ decorateMap(
    class SomeSatisfyObserver<T> extends AbstractDelegatingObserver<
      T,
      boolean
    > {
      constructor(
        delegate: ObserverLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithSomeSatisfyNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createSomeSatisfyOperator({ ...fromArrayT, ...liftEnumerableT }),
  );

export const someSatisfyT: SomeSatisfy<ObservableLike<unknown>> = {
  someSatisfy,
};
