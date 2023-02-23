import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { DistinctUntilChanged } from "../../../containers.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { Equality, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      const typedDistinctUntilChangedSinkMixin =
        Sink_distinctUntilChangedMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedDistinctUntilChangedSinkMixin),
          function DistinctUntilChangedObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            equality: Equality<T>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(
              typedDistinctUntilChangedSinkMixin,
              instance,
              delegate,
              equality,
            );

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createDistinctUntilChangedObserver,
      StatefulContainer_distinctUntilChanged<ObservableLike, T>(
        Observable_liftEnumerableOperator,
      ),
    );
  })();

export default Observable_distinctUntilChanged;
