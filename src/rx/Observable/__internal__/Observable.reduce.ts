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
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  Factory,
  Reducer,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  QueueableLike_maxBufferSize,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";

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
      include(Disposable_mixin, Observer_mixin<T>()),
      function ReduceObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(
          Observer_mixin<T>(),
          instance,
          delegate[DispatcherLike_scheduler],
          delegate[QueueableLike_maxBufferSize],
        );

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
              Observable_observeWith(delegate),
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
      Observable_liftEnumerableOperator,
    )) as ObservableReduce;
})();

export default Observable_reduce;
