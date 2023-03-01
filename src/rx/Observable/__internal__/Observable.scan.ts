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
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { Factory, Reducer, error, none, pipe } from "../../../functions.js";
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
    const ScanSinkMixin_reducer = Symbol("ScanSinkMixin_reducer");
    const ScanSinkMixin_acc = Symbol("ScanSinkMixin_acc");

    type TProperties = {
      readonly [ScanSinkMixin_reducer]: Reducer<T, TAcc>;
      [ScanSinkMixin_acc]: TAcc;
    };

    return createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin<ObserverLike<TAcc>>(),
          Observer_mixin<T>(),
        ),
        function ScanSinkMixin(
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

          instance[ScanSinkMixin_reducer] = reducer;

          try {
            const acc = initialValue();
            instance[ScanSinkMixin_acc] = acc;
          } catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
          }

          return instance;
        },
        props<TProperties>({
          [ScanSinkMixin_reducer]: none,
          [ScanSinkMixin_acc]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<TAcc>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const nextAcc = this[ScanSinkMixin_reducer](
              this[ScanSinkMixin_acc],
              next,
            );
            this[ScanSinkMixin_acc] = nextAcc;
            this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
          },
        },
      ),
    );
  })();

  return pipe(
    createScanObserver,
    StatefulContainer_scan<ObservableLike, T, TAcc>(
      Observable_liftEnumerableOperator,
    ),
  );
})();

export default Observable_scan;
