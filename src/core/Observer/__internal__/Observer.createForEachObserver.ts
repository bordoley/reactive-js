import {
  DelegatingLike,
  DelegatingLike_delegate,
  ForEachLike,
  ForEachLike_effect,
} from "../../../__internal__/core.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import { SideEffect1, none } from "../../../functions.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createForEachObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function ForEachObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          ForEachLike<T>,
        delegate: ObserverLike<T>,
        effect: SideEffect1<T>,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[ForEachLike_effect] = effect;

        return instance;
      },
      props<ForEachLike<T>>({
        [ForEachLike_effect]: none,
      }),
      {
        [ObserverLike_notify](
          this: ForEachLike<T> &
            DelegatingLike<ObserverLike<T>> &
            ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          this[ForEachLike_effect](next);
          this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
      },
    ),
  ))();

export default Observer_createForEachObserver;
