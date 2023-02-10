import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty";
import { Factory, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin";
import Sink_throwIfEmptyMixin from "../../Sink/__internal__/Sink.throwIfEmptyMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (<T>() => {
      const typedThrowIfEmptySinkMixin = Sink_throwIfEmptyMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedThrowIfEmptySinkMixin),
          function ThrowIfEmptyObserver(
            instance: unknown,
            delegate: ObserverLike<T>,
            factory: Factory<unknown>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);

            return instance;
          },
        ),
      );
    })();

    return pipe(
      createThrowIfEmptyObserver,
      StatefulContainer_throwIfEmpty(Observable_liftEnumerableOperatorT),
    );
  })();

export default Observable_throwIfEmpty;
