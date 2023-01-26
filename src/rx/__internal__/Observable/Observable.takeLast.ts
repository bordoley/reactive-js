import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import StatefulContainer$takeLast from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$takeLastMixin from "../Sink/Sink.takeLastMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$takeLast: TakeLast<ObservableLike>["takeLast"] =
  /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink$takeLastMixin(
      ReadonlyArray$toRunnableObservable(),
    );
    const typedObserverMixin = Observer$mixin();

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
      StatefulContainer$takeLast(Observable$liftEnumerableOperatorT),
    );
  })();

export default Observable$takeLast;
