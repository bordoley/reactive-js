import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainerLike__forEach from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { SideEffect1, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__forEachMixin from "../SinkLike/SinkLike.forEachMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const forEach: ForEach<ObservableLike>["forEach"] = /*@__PURE__*/ (<T>() => {
  const createForEachObserver: <T>(
    delegate: ObserverLike<T>,
    effect: SideEffect1<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedForEachSinkMixin = SinkLike__forEachMixin<T>();
    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedObserverMixin, typedForEachSinkMixin),
        function ForEachObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          effect: SideEffect1<T>,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedForEachSinkMixin, instance, delegate, effect);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createForEachObserver,
    StatefulContainerLike__forEach<ObservableLike, T, TReactive>(
      ObservableLike__liftEnumerableOperatorT,
    ),
  );
})();

export default forEach;
