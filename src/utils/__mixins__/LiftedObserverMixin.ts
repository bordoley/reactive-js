import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { ObserverLike } from "../../utils.js";
import { ObserverMixinBaseLike } from "./ObserverMixin.js";

export const LiftedObserverLike_delegate = Symbol(
  "LiftedObserverLike_delegate",
);

export interface LiftedObserverLike<
  TA,
  TB = TA,
  TObserver extends ObserverLike<TB> = ObserverLike<TB>,
> extends ObserverLike<TA> {
  readonly [LiftedObserverLike_delegate]: TObserver &
    Partial<ObserverMixinBaseLike<TB>>;
}

const LiftedObserverMixin: <
  TA,
  TB = TA,
  TObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() => Mixin1<
  LiftedObserverLike<TA, TB, TObserver>,
  TObserver,
  ObserverLike<TA>
> = /*@__PURE__*/ (<TA, TB, TObserver extends ObserverLike<TB>>() => {
  type TProperties = {
    [LiftedObserverLike_delegate]: TObserver;
  };

  return returns(
    mix(
      function LiftedObserverMixin(
        this: ObserverLike<TA> & TProperties,
        delegate: TObserver,
      ): LiftedObserverLike<TA, TB, TObserver> {
        this[LiftedObserverLike_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [LiftedObserverLike_delegate]: none,
      }),
    ),
  );
})();

export default LiftedObserverMixin;
