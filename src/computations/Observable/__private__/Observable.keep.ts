import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
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
    include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()),
    function KeepObserver(
      this: Pick<ObserverLike<T>, typeof ObserverLike_notify> & TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[KeepObserver_predicate] = predicate;

      return this;
    },
    props<TProperties<T>>({
      [KeepObserver_predicate]: none,
    }),
    proto({
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        if (this[KeepObserver_predicate](next)) {
          this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }
      }),
    }),
  ))();

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(createKeepObserver<T>, partial(predicate), Observable_liftPure);

export default Observable_keep;
