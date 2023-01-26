import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { SkipFirst } from "../../../containers";
import StatefulContainer$skipFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$skipFirstMixin from "../Sink/Sink.skipFirstMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  /*@__PURE__*/ (() => {
    const createSkipFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const typedSkipFirstSinkMixin = Sink$skipFirstMixin<T>();
      const typedObserverMixin = Observer$mixin<T>();

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
        ),
      );
    })();

    return pipe(
      createSkipFirstObserver,
      StatefulContainer$skipFirst(Observable$liftEnumerableOperatorT),
    );
  })();

export default Observable$skipFirst;
