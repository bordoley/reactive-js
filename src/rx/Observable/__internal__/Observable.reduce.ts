import {
  ReducerAccumulatorLike,
  ReducerAccumulatorLike_acc,
  ReducerAccumulatorLike_reducer,
} from "../../../__internal__/containers.js";
import {
  createInstanceFactory,
  include,
  mix,
  props,
} from "../../../__internal__/mixins.js";
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
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

type ObservableReduce = <C extends ObservableLike, T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ContainerOperator<C, T, TAcc>;
const Observable_reduce: ObservableReduce = /*@__PURE__*/ (<T, TAcc>() => {
  const createReduceObserver = createInstanceFactory(
    mix(
      include(Observer_mixin<T>()),
      function ReduceObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          ReducerAccumulatorLike<T, TAcc>,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[ReducerAccumulatorLike_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ReducerAccumulatorLike_acc] = acc;
        } catch (e) {
          instance[DisposableLike_dispose](error(e));
        }

        pipe(
          instance,
          Disposable_onComplete(() => {
            pipe(
              [instance[ReducerAccumulatorLike_acc]],
              ReadonlyArray_toObservable(),
              invoke(ObservableLike_observe, delegate),
            );
          }),
        );

        return instance;
      },
      props<ReducerAccumulatorLike<T, TAcc>>({
        [ReducerAccumulatorLike_acc]: none,
        [ReducerAccumulatorLike_reducer]: none,
      }),
      {
        [ObserverLike_notify](
          this: ReducerAccumulatorLike<T, TAcc> & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          const nextAcc = this[ReducerAccumulatorLike_reducer](
            this[ReducerAccumulatorLike_acc],
            next,
          );
          this[ReducerAccumulatorLike_acc] = nextAcc;
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
