import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  ReducerAccumulatorLike,
  ReducerAccumulatorLike_acc,
  ReducerAccumulatorLike_reducer,
} from "../../__internal__/types.js";
import { Container, ObservableContainer } from "../../containers.js";
import {
  Factory,
  Reducer,
  error,
  none,
  partial,
  pipe,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";

type ObservableScan = <C extends ObservableContainer.Type, T, TAcc>(
  scanner: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => Container.Operator<C, T, TAcc>;
const Observable_scan: ObservableScan = /*@__PURE__*/ (<T, TAcc>() => {
  const createScanObserver: (
    delegate: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (() => {
    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), Delegating_mixin()),
        function ScanObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            ReducerAccumulatorLike<T, TAcc>,
          delegate: ObserverLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);
          instance[ReducerAccumulatorLike_reducer] = reducer;

          try {
            const acc = initialValue();
            instance[ReducerAccumulatorLike_acc] = acc;
          } catch (e) {
            instance[DisposableLike_dispose](error(e));
          }

          return instance;
        },
        props<ReducerAccumulatorLike<T, TAcc>>({
          [ReducerAccumulatorLike_acc]: none,
          [ReducerAccumulatorLike_reducer]: none,
        }),
        {
          [ObserverLike_notify](
            this: ReducerAccumulatorLike<T, TAcc> &
              DelegatingLike<ObserverLike<TAcc>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const nextAcc = this[ReducerAccumulatorLike_reducer](
              this[ReducerAccumulatorLike_acc],
              next,
            );
            this[ReducerAccumulatorLike_acc] = nextAcc;
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
