import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainerLike__keep from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Predicate, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__keepMixin from "../SinkLike/SinkLike.keepMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__keep: Keep<ObservableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const createKeepObserver: <T>(
    delegate: ObserverLike<T>,
    predicate: Predicate<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedKeepSinkMixin = SinkLike__keepMixin<T>();
    const typedObserverMixin = ObserverLike__mixin<T>();

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
    StatefulContainerLike__keep<ObservableLike, T, TReactive>(
      ObservableLike__liftEnumerableOperatorT,
    ),
  );
})();

export default ObservableLike__keep;
