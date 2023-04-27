import {
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../../__internal__/containers.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { Predicate, none } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function KeepObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          PredicatedLike<T>,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[PredicatedLike_predicate] = predicate;

        return instance;
      },
      props<PredicatedLike<T>>({
        [PredicatedLike_predicate]: none,
      }),
      {
        [ObserverLike_notify](
          this: PredicatedLike<T> &
            DelegatingLike<ObserverLike<T>> &
            ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          if (this[PredicatedLike_predicate](next)) {
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Observer_createKeepObserver;
