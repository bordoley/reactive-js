import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainerLike__scan from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";

import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__scanMixin from "../SinkLike/SinkLike.scanMixin";
import ObservableLike__liftEnumerableOperatorT from "./ObservableLike.liftEnumerableOperatorT";

const ObservableLike__scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanObserver: (
    delegate: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (() => {
    const typedScanSinkMixin = SinkLike__scanMixin<T, TAcc>();

    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedObserverMixin, typedScanSinkMixin),
        function ScanObserver(
          instance: unknown,
          delegate: ObserverLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): ObserverLike<T> {
          init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
          init(typedScanSinkMixin, instance, delegate, reducer, initialValue);

          return instance;
        },
      ),
    );
  })();

  return pipe(
    createScanObserver,
    StatefulContainerLike__scan<ObservableLike, T, TAcc, TReactive>(
      ObservableLike__liftEnumerableOperatorT,
    ),
  );
})();

export default ObservableLike__scan;
