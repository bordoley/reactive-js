import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ReduceObserver_acc,
  ReduceObserver_reducer,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Factory,
  Reducer,
  error,
  invoke,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

type ObservableReduce = <C extends ObservableLike, T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>;
const Observable_reduce: ObservableReduce = /*@__PURE__*/ (<T, TAcc>() => {
  type TProperties = {
    readonly [ReduceObserver_reducer]: Reducer<T, TAcc>;
    [ReduceObserver_acc]: TAcc;
  };

  const createReduceObserver = createInstanceFactory(
    mix(
      include(Observer_mixin<T>()),
      function ReduceObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(Observer_mixin(), instance, delegate, delegate);
        instance[ReduceObserver_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ReduceObserver_acc] = acc;
        } catch (e) {
          instance[DisposableLike_dispose](error(e));
        }

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            pipe(
              [instance[ReduceObserver_acc]],
              ReadonlyArray_toObservable(),
              invoke(ObservableLike_observe, delegate),
            );
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ReduceObserver_reducer]: none,
        [ReduceObserver_acc]: none,
      }),
      {
        [ObserverLike_notify](this: TProperties & ObserverLike<T>, next: T) {
          Observer_assertState(this);

          const nextAcc = this[ReduceObserver_reducer](
            this[ReduceObserver_acc],
            next,
          );
          this[ReduceObserver_acc] = nextAcc;
        },
      },
    ),
  );

  return ((reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createReduceObserver,
      partial(reducer, initialValue),
      Enumerable_lift,
    )) as ObservableReduce;
})();

export default Observable_reduce;
