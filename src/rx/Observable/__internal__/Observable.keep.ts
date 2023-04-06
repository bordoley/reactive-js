import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { KeepObserver_predicate } from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";

import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "../../Observer/__internal__/Observer.mixin.js";

type ObservableKeep = <C extends ObservableLike, T>(
  predicate: Predicate<T>,
  options?: undefined,
) => ContainerOperator<C, T, T>;
const Observable_keep: ObservableKeep = /*@__PURE__*/ (<T>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [KeepObserver_predicate]: Predicate<T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<T>()),
        function KeepObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
        ): ObserverLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          initObserverMixinFromDelegate(instance, delegate);

          instance[KeepObserver_predicate] = predicate;

          return instance;
        },
        props<TProperties>({
          [KeepObserver_predicate]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            if (this[KeepObserver_predicate](next)) {
              this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
          },
        },
      ),
    );
  })();

  return (predicate: Predicate<T>) =>
    pipe(createKeepObserver, partial(predicate), Enumerable_lift);
})() as ObservableKeep;

export default Observable_keep;
