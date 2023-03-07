import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
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
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
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
  const ReduceObserverMixin_reducer = Symbol("ReduceObserverMixin_reducer");
  const ReduceObserverMixin_acc = Symbol("ReduceObserverMixin_acc");

  type TProperties = {
    readonly [ReduceObserverMixin_reducer]: Reducer<T, TAcc>;
    [ReduceObserverMixin_acc]: TAcc;
  };

  const createReduceObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, Observer_mixin<T>()),
      function ReduceObserverMixin(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

        instance[ReduceObserverMixin_reducer] = reducer;

        try {
          const acc = initialValue();
          instance[ReduceObserverMixin_acc] = acc;
        } catch (e) {
          instance[DisposableLike_dispose](error(e));
        }

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            pipe(
              [instance[ReduceObserverMixin_acc]],
              ReadonlyArray_toObservable(),
              Observable_observeWith(delegate),
            );
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ReduceObserverMixin_reducer]: none,
        [ReduceObserverMixin_acc]: none,
      }),
      {
        [ObserverLike_notify](this: TProperties & ObserverLike<T>, next: T) {
          Observer_assertState(this);

          const nextAcc = this[ReduceObserverMixin_reducer](
            this[ReduceObserverMixin_acc],
            next,
          );
          this[ReduceObserverMixin_acc] = nextAcc;
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
