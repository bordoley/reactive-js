import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Reduce } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import StatefulContainer_reduce from "../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_reduceMixin from "../Sink/Sink.reduceMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_reduce: Reduce<ObservableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = Sink_reduceMixin<
    ObservableLike<TAcc>,
    ObserverLike<TAcc>,
    T,
    TAcc
  >(ReadonlyArray_toRunnableObservable());

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
    ),
  );

  return pipe(
    createReduceObserver,
    StatefulContainer_reduce<ObservableLike, T, TAcc, TReactive>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_reduce;
