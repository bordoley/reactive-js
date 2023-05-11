import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __DistinctUntilChangedObserver_equality,
  __DistinctUntilChangedObserver_hasValue,
  __DistinctUntilChangedObserver_prev,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Equality, none } from "../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__DistinctUntilChangedObserver_equality]: Equality<T>;
    [__DistinctUntilChangedObserver_prev]: T;
    [__DistinctUntilChangedObserver_hasValue]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function DistinctUntilChangedObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__DistinctUntilChangedObserver_equality] = equality;

        return instance;
      },
      props<TProperties>({
        [__DistinctUntilChangedObserver_equality]: none,
        [__DistinctUntilChangedObserver_prev]: none,
        [__DistinctUntilChangedObserver_hasValue]: false,
      }),
      {
        [ObserverLike_notify](
          this: TProperties & DelegatingLike<ObserverLike<T>> & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          const shouldEmit =
            !this[__DistinctUntilChangedObserver_hasValue] ||
            !this[__DistinctUntilChangedObserver_equality](
              this[__DistinctUntilChangedObserver_prev],
              next,
            );

          if (shouldEmit) {
            this[__DistinctUntilChangedObserver_prev] = next;
            this[__DistinctUntilChangedObserver_hasValue] = true;
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Observer_createDistinctUntilChangedObserver;
