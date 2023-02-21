import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { Reduce } from "../../../containers.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import StatefulContainer_reduce from "../../../containers/StatefulContainer/__internal__/StatefulContainer.reduce.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_reduceMixin from "../../Sink/__internal__/Sink.reduceMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

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
