import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer$keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Predicate, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$keepMixin from "../Sink/Sink.keepMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$keep: Keep<ObservableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedKeepSinkMixin = Sink$keepMixin<T>();
    const typedObserverMixin = Observer$mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedObserverMixin, typedKeepSinkMixin),
        function KeepObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedKeepSinkMixin, instance, delegate, predicate);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createKeepObserver,
    StatefulContainer$keep<ObservableLike, T, TReactive>(
      Observable$liftEnumerableOperatorT,
    ),
  );
})();

export default Observable$keep;
