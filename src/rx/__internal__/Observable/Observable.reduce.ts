import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Reduce } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import StatefulContainer$reduce from "../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$reduceMixin from "../Sink/Sink.reduceMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$reduce: Reduce<ObservableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = Sink$reduceMixin<
    ObservableLike<TAcc>,
    ObserverLike<TAcc>,
    T,
    TAcc
  >(ReadonlyArray$toRunnableObservable());

  const typedObserverMixin = Observer$mixin<T>();

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
    StatefulContainer$reduce<ObservableLike, T, TAcc, TReactive>(
      Observable$liftEnumerableOperatorT,
    ),
  );
})();

export default Observable$reduce;
