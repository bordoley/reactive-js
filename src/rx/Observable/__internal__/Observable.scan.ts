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
import {
  ScanObserver_acc,
  ScanObserver_reducer,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
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
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "../../Observer/__internal__/Observer.mixin.js";

type ObservableScan = <C extends ObservableLike, T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>;
const Observable_scan: ObservableScan = /*@__PURE__*/ (<T, TAcc>() => {
  const createScanObserver: (
    delegate: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (() => {
    type TProperties = {
      readonly [ScanObserver_reducer]: Reducer<T, TAcc>;
      [ScanObserver_acc]: TAcc;
    };

    return createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin<ObserverLike<TAcc>>(),
          Observer_mixin<T>(),
        ),
        function ScanObserver(
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
          initObserverMixinFromDelegate(instance, delegate);

          instance[ScanObserver_reducer] = reducer;

          try {
            const acc = initialValue();
            instance[ScanObserver_acc] = acc;
          } catch (e) {
            instance[DisposableLike_dispose](error(e));
          }

          return instance;
        },
        props<TProperties>({
          [ScanObserver_reducer]: none,
          [ScanObserver_acc]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<TAcc>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const nextAcc = this[ScanObserver_reducer](
              this[ScanObserver_acc],
              next,
            );
            this[ScanObserver_acc] = nextAcc;
            this[DelegatingLike_delegate][ObserverLike_notify](nextAcc);
          },
        },
      ),
    );
  })();

  return ((reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createScanObserver,
      partial(reducer, initialValue),
      Enumerable_lift,
    )) as ObservableScan;
})();

export default Observable_scan;
