import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainer$distinctUntilChanged from "../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Equality, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$distinctUntilChangedMixin from "../Sink/Sink.distinctUntilChangedMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const createDistinctUntilChangedObserver: <T>(
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) => ObserverLike<T> = (<T>() => {
      const typedDistinctUntilChangedSinkMixin =
        Sink$distinctUntilChangedMixin<T>();
      const typedObserverMixin = Observer$mixin<T>();

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
      StatefulContainer$distinctUntilChanged<ObservableLike, T, TReactive>(
        Observable$liftEnumerableOperatorT,
      ),
    );
  })();

export default Observable$distinctUntilChanged;
