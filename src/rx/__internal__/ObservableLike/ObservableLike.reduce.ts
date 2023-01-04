import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Reduce } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import StatefulContainerLike__reduce from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__reduceMixin from "../SinkLike/SinkLike.reduceMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__reduce: Reduce<ObservableLike>["reduce"] =
  /*@__PURE__*/ (<T, TAcc>() => {
    const typedReduceSinkMixin = SinkLike__reduceMixin<
      ObservableLike<TAcc>,
      ObserverLike<TAcc>,
      T,
      TAcc
    >(ReadonlyArrayLike__toRunnableObservable());

    const typedObserverMixin = ObserverLike__mixin<T>();

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
      StatefulContainerLike__reduce<ObservableLike, T, TAcc, TReactive>(
        ObservableLike__liftEnumerableOperatorT,
      ),
    );
  })();

export default ObservableLike__reduce;
