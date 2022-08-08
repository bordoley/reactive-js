import { decorateMap } from "./__internal__.functions";
import {
  createCatchErrorOperator,
  createEverySatisfyOperator,
  createSomeSatisfyOperator,
  decorateWithCatchErrorNotify,
  decorateWithEverySatisfyNotify,
  decorateWithSomeSatisfyNotify,
} from "./__internal__.reactiveContainer";
import {
  Container,
  ContainerLike,
  ContainerOperator,
  EverySatisfy,
  SomeSatisfy,
  concatMap,
} from "./container";
import {
  Factory,
  Function1,
  Function2,
  Predicate,
  instanceFactory,
  pipe,
} from "./functions";
import { CatchError } from "./liftableContainer";
import { fromArrayT } from "./observable/fromArray";
import { liftEnumerableT } from "./observable/lift";
import { mapT } from "./observable/map";
import {
  AbstractDelegatingObserver,
  decorateNotifyWithAssertions,
} from "./observable/observer";
import { onNotify } from "./observable/onNotify";
import { Subject, publish, publishTo } from "./observable/subject";
import { switchAll, switchAllT } from "./observable/switchAll";
import { using } from "./observable/using";
import { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
import { ObserverLike } from "./observer";
import { __yield } from "./scheduler";

export type AsyncReducer<T, TAcc> = Function2<TAcc, T, ObservableLike<TAcc>>;

/**
 * The throttle mode used by the `throttle` operator.
 * first - Takes a leading value.
 * last - Takes the trailing value.
 * interval -  Takes both the leading and trailing values.
 */
export type ThrottleMode = "first" | "last" | "interval";

export { repeat, repeatT, retry } from "./observable/repeat";
export { throttle } from "./observable/throttle";
export { timeout, timeoutError } from "./observable/timeout";
export { withLatestFrom } from "./observable/withLatestFrom";
export { zipWithLatestFrom } from "./observable/zipWithLatestFrom";

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

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) => fromPromise(() => f(a)));

export interface ScanAsync<C extends ContainerLike> extends Container<C> {
  scanAsync: <T, TAcc>(
    scanner: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
}

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
