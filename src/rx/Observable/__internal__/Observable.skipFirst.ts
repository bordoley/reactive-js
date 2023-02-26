import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { SkipFirst } from "../../../containers.js";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  /*@__PURE__*/ (() => {
    const createSkipFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const typedSkipFirstSinkMixin = Sink_skipFirstMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedSkipFirstSinkMixin),
          function SkipFirstObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            skipCount: number,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedSkipFirstSinkMixin, instance, delegate, skipCount);

            return instance;
          },
          props<unknown>({}),
          Observer_decorateNotifyForDev(typedSkipFirstSinkMixin),
        ),
      );
    })();

    return pipe(
      createSkipFirstObserver,
      StatefulContainer_skipFirst(Observable_liftEnumerableOperator),
    );
  })();

export default Observable_skipFirst;
