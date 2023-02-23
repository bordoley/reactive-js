import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ForEach } from "../../../containers.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { SideEffect1, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

const Observable_forEach: ForEach<ObservableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const createForEachObserver: <T>(
    delegate: ObserverLike<T>,
    effect: SideEffect1<T>,
  ) => ObserverLike<T> = (<T>() => {
    const typedForEachSinkMixin = Sink_forEachMixin<T>();
    const typedObserverMixin = Observer_mixin<T>();

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
    StatefulContainer_forEach<ObservableLike, T>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_forEach;
