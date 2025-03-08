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
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const DistinctUntilChangedObserver_equality = Symbol(
  "DistinctUntilChangedObserver_equality",
);
const DistinctUntilChangedObserver_prev = Symbol(
  "DistinctUntilChangedObserver_prev",
);
const DistinctUntilChangedObserver_hasValue = Symbol(
  "DistinctUntilChangedObserver_hasValue",
);

interface TProps<T> {
  [DistinctUntilChangedObserver_equality]: Equality<T>;
  [DistinctUntilChangedObserver_prev]: T;
  [DistinctUntilChangedObserver_hasValue]: boolean;
}

const createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()),
    function DistinctUntilChangedObserver(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> & TProps<T>,
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      init(LiftedObserverMixin(), instance, delegate);

      instance[DistinctUntilChangedObserver_equality] = equality;

      return instance;
    },
    props<TProps<T>>({
      [DistinctUntilChangedObserver_equality]: none,
      [DistinctUntilChangedObserver_prev]: none,
      [DistinctUntilChangedObserver_hasValue]: false,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProps<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const shouldEmit =
          !this[DistinctUntilChangedObserver_hasValue] ||
          !this[DistinctUntilChangedObserver_equality](
            this[DistinctUntilChangedObserver_prev],
            next,
          );

        if (shouldEmit) {
          this[DistinctUntilChangedObserver_prev] = next;
          this[DistinctUntilChangedObserver_hasValue] = true;
          this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }
      }),
    },
  ))();

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      createDistinctUntilChangedObserver<T>,
      partial(options?.equality ?? strictEquality),
      Observable_liftPureDeferred,
    );

export default Observable_distinctUntilChanged;
