import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Reduce } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_reduce from "../../../containers/StatefulContainer/__internal__/StatefulContainer.reduce.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_reduceMixin from "../../Sink/__internal__/Sink.reduceMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_reduce: Reduce<ObservableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = Observer_reduceMixin<
    ObservableLike<TAcc>,
    T,
    TAcc
  >(ReadonlyArray_toRunnable());

  const typedObserverMixin = Observer_mixin<T>();

  const createReduceObserver = createInstanceFactory(
    mix(
      include(typedObserverMixin, typedReduceSinkMixin),
      function ReduceObserver(
        instance: unknown,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);

        return instance;
      },
      props<unknown>({}),
      Observer_decorateNotifyForDev(typedReduceSinkMixin),
    ),
  );

  return pipe(
    createReduceObserver,
    StatefulContainer_reduce<ObservableLike, T, TAcc>(
      Observable_liftEnumerableOperator,
    ),
  );
})();

export default Observable_reduce;
