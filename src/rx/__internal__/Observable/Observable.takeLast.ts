import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import StatefulContainer_takeLast from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_takeLastMixin from "../Sink/Sink.takeLastMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_takeLast: TakeLast<ObservableLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink_takeLastMixin(
      ReadonlyArray_toRunnableObservable(),
    );
    const typedObserverMixin = Observer_mixin();

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
      StatefulContainer_takeLast(Observable_liftEnumerableOperatorT),
    );
  })();

export default Observable_takeLast;
