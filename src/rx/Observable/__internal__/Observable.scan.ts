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
import { Scan } from "../../../containers.js";
import {
  Factory,
  Reducer,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";

import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

const Observable_scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanObserver: (
    delegate: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (() => {
    const ScanObserverMixin_reducer = Symbol("ScanObserverMixin_reducer");
    const ScanObserverMixin_acc = Symbol("ScanObserverMixin_acc");

    type TProperties = {
      readonly [ScanObserverMixin_reducer]: Reducer<T, TAcc>;
      [ScanObserverMixin_acc]: TAcc;
    };

    return createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin<ObserverLike<TAcc>>(),
          Observer_mixin<T>(),
        ),
        function ScanObserverMixin(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): ObserverLike<T> {
          init(
            Disposable_delegatingMixin<ObserverLike<TAcc>>(),
            instance,
            delegate,
          );
          init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

          instance[ScanObserverMixin_reducer] = reducer;

          try {
            const acc = initialValue();
            instance[ScanObserverMixin_acc] = acc;
          } catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
          }

          return instance;
        },
        props<TProperties>({
          [ScanObserverMixin_reducer]: none,
          [ScanObserverMixin_acc]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<TAcc>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const nextAcc = this[ScanObserverMixin_reducer](
              this[ScanObserverMixin_acc],
              next,
            );
            this[ScanObserverMixin_acc] = nextAcc;
            this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
          },
        },
      ),
    );
  })();

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createScanObserver,
      partial(reducer, initialValue),
      Observable_liftEnumerableOperator,
    );
})();

export default Observable_scan;
