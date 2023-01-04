import { Factory } from "react";
import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainerLike__throwIfEmpty from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty";
import { pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__throwIfEmptyMixin from "../SinkLike/SinkLike.throwIfEmptyMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (<T>() => {
      const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin<T>();
      const typedObserverMixin = ObserverLike__mixin<T>();

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
      StatefulContainerLike__throwIfEmpty(
        ObservableLike__liftEnumerableOperatorT,
      ),
    );
  })();

export default ObservableLike__throwIfEmpty;
