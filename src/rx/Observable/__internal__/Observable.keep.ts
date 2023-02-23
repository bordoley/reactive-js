import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { Keep } from "../../../containers.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { Predicate, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

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
    StatefulContainer_keep<ObservableLike, T>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_keep;
