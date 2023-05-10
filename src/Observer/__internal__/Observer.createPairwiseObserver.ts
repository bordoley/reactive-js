import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __PairwiseObserver_hasPrev,
  __PairwiseObserver_prev,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../types.js";

const Observer_createPairwiseObserver: <T>(
  delegate: ObserverLike<readonly [T, T]>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__PairwiseObserver_prev]: T;
    [__PairwiseObserver_hasPrev]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Observer_delegatingMixin<T>(), Delegating_mixin()),
      function PairwiseObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<readonly [T, T]>,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props<TProperties>({
        [__PairwiseObserver_prev]: none,
        [__PairwiseObserver_hasPrev]: false,
      }),
      {
        [ObserverLike_notify](
          this: TProperties &
            DelegatingLike<ObserverLike<readonly [T, T]>> &
            ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          const prev = this[__PairwiseObserver_prev];

          if (this[__PairwiseObserver_hasPrev]) {
            this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
          }

          this[__PairwiseObserver_hasPrev] = true;
          this[__PairwiseObserver_prev] = next;
        },
      },
    ),
  );
})();

export default Observer_createPairwiseObserver;
