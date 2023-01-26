import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainer$forEach from "../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { SideEffect1, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$forEachMixin from "../Sink/Sink.forEachMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$forEach: ForEach<ObservableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const createForEachObserver: <T>(
    delegate: ObserverLike<T>,
    effect: SideEffect1<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedForEachSinkMixin = Sink$forEachMixin<T>();
    const typedObserverMixin = Observer$mixin<T>();

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
    StatefulContainer$forEach<ObservableLike, T, TReactive>(
      Observable$liftEnumerableOperatorT,
    ),
  );
})();

export default Observable$forEach;
