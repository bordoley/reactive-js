import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import StatefulContainerLike__takeLast from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__takeLastMixin from "../SinkLike/SinkLike.takeLastMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__takeLast: TakeLast<ObservableLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = SinkLike__takeLastMixin(
      ReadonlyArrayLike__toRunnableObservable(),
    );
    const typedObserverMixin = ObserverLike__mixin();

    const createTakeLastObserver = createInstanceFactory(
      mix(
        include(typedObserverMixin, typedTakeLastSinkMixin),
        function TakeLastObserver(
          instance: unknown,
          delegate: ObserverLike,
          takeCount: number,
        ): ObserverLike {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedTakeLastSinkMixin, instance, delegate, takeCount);

          return instance;
        },
      ),
    );

    return pipe(
      createTakeLastObserver,
      StatefulContainerLike__takeLast(ObservableLike__liftEnumerableOperatorT),
    );
  })();

export default ObservableLike__takeLast;
