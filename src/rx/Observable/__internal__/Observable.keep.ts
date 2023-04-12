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
import { ContainerOperator } from "../../../containers.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableKeep = <C extends ObservableLike, T>(
  predicate: Predicate<T>,
  options?: undefined,
) => ContainerOperator<C, T, T>;
const Observable_keep: ObservableKeep = /*@__PURE__*/ (<T>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() =>
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

  return (predicate: Predicate<T>) =>
    pipe(createKeepObserver, partial(predicate), Enumerable_lift);
})() as ObservableKeep;

export default Observable_keep;
