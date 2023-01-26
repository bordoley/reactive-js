import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer_keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Predicate, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_keepMixin from "../Sink/Sink.keepMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_keep: Keep<ObservableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedKeepSinkMixin = Sink_keepMixin<T>();
    const typedObserverMixin = Observer_mixin<T>();

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
    StatefulContainer_keep<ObservableLike, T, TReactive>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_keep;
