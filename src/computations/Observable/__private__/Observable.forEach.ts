import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const createForEachObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const ForEachObserver_effect = Symbol("ForEachObserver_effect");

  interface TProperties {
    [ForEachObserver_effect]: SideEffect1<T>;
  }

  return mixInstanceFactory(
    include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()),
    function ForEachObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
      effect: SideEffect1<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);
      this[ForEachObserver_effect] = effect;

      return this;
    },
    props<TProperties>({
      [ForEachObserver_effect]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[ForEachObserver_effect](next);
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
      }),
    },
  );
})();

const Observable_forEach: Observable.Signature["forEach"] = <T>(
  effect: SideEffect1<T>,
) =>
  pipe(
    createForEachObserver<T>,
    partial(effect),
    Observable_liftWithSideEffects,
  );

export default Observable_forEach;
