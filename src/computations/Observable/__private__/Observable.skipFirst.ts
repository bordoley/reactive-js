import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../computations.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");

interface TProperties {
  [SkipFirstObserver_count]: number;
}

const createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count?: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()),
    function SkipFirstObserver(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> & TProperties,
      delegate: ObserverLike<T>,
      skipCount?: number,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      init(LiftedObserverMixin(), instance, delegate);

      instance[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);

      return instance;
    },
    props<TProperties>({
      [SkipFirstObserver_count]: 0,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[SkipFirstObserver_count] = max(
          this[SkipFirstObserver_count] - 1,
          -1,
        );
        if (this[SkipFirstObserver_count] < 0) {
          this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }
      }),
    },
  ))();

const Observable_skipFirst: Observable.Signature["skipFirst"] = <T>(options?: {
  readonly count?: number;
}) =>
  pipe(
    createSkipFirstObserver<T>,
    partial(options?.count),
    Observable_liftPureDeferred,
  );
export default Observable_skipFirst;
