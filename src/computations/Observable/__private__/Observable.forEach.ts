import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none, partial, pipe } from "../../../functions.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike, QueueableLike_enqueue } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

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
        Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify>,
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
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];

        this[ForEachObserver_effect](next);

        return (
          delegate?.[LiftedObserverLike_notify]?.(next) ??
          delegate[QueueableLike_enqueue](next)
        );
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
