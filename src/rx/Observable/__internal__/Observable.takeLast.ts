import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { TakeLast } from "../../../containers.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_takeLastMixin from "../../Sink/__internal__/Sink.takeLastMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

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
