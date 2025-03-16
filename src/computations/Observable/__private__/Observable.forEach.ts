import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
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
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function ForEachObserver(
      this: TProperties &
        Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify>,
      delegate: ObserverLike<T>,
      effect: SideEffect1<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[ForEachObserver_effect] = effect;

      return this;
    },
    props<TProperties>({
      [ForEachObserver_effect]: none,
    }),
    {
      [LiftedEventListenerLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[ForEachObserver_effect](next);
        this[LiftedEventListenerLike_notifyDelegate](next);
      },
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
