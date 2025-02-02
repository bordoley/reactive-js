import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../concurrent.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";

const KeepObserver_predicate = Symbol("KeepObserver_predicate");

interface TProperties<T> {
  [KeepObserver_predicate]: Predicate<T>;
}

const createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin<ObserverLike<T>>(), ObserverMixin()),
    function KeepObserver(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin<ObserverLike<T>>(), instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);

      instance[KeepObserver_predicate] = predicate;

      return instance;
    },
    props<TProperties<T>>({
      [KeepObserver_predicate]: none,
    }),
    {
      [ObserverLike_notify](
        this: TProperties<T> &
          DelegatingDisposableLike<ObserverLike<T>> &
          ObserverLike<T>,
        next: T,
      ) {
        Observer_assertObserverState(this);

        if (this[KeepObserver_predicate](next)) {
          this[DelegatingDisposableLike_delegate][ObserverLike_notify](next);
        }
      },
    },
  ))();

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(createKeepObserver<T>, partial(predicate), Observable_liftPure);

export default Observable_keep;
