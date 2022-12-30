import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { liftEnumerableObservableT } from "../../../__internal__/rx/ObservableLike.lift";
import { TakeFirst } from "../../../containers";
import StatefulContainerLike__takeFirst from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike_takeFirstMixin from "../SinkLike/SinkLike.takeFirstMixin";

const takeFirst: TakeFirst<ObservableLike>["takeFirst"] = /*@__PURE__*/ (() => {
  const createTakeFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
    const typedTakeFirstSinkMixin = SinkLike_takeFirstMixin<T>();
    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedObserverMixin, typedTakeFirstSinkMixin),
        function TakeFirstObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          takeCount: number,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedTakeFirstSinkMixin, instance, delegate, takeCount);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createTakeFirstObserver,
    StatefulContainerLike__takeFirst(liftEnumerableObservableT),
  );
})();

export default takeFirst;
