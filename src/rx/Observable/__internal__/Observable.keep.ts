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
import { Keep } from "../../../containers.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { Predicate, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_keep: Keep<ObservableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() => {
    const KeepObserverMixin_predicate = Symbol("KeepObserverMixin_predicate");

    type TProperties = {
      readonly [KeepObserverMixin_predicate]: Predicate<T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<T>()),
        function KeepObserverMixin(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
        ): ObserverLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

          instance[KeepObserverMixin_predicate] = predicate;

          return instance;
        },
        props<TProperties>({
          [KeepObserverMixin_predicate]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            if (this[KeepObserverMixin_predicate](next)) {
              this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
          },
        },
      ),
    );
  })();

  return pipe(
    createKeepObserver,
    StatefulContainer_keep<ObservableLike, T>(
      Observable_liftEnumerableOperator,
    ),
  );
})();

export default Observable_keep;
