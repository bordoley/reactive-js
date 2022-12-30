import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { liftEnumerableObservableT } from "../../../__internal__/rx/ObservableLike.lift";
import { Scan } from "../../../containers";
import StatefulContainerLike__scan from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";

import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__scanMixin from "../SinkLike/SinkLike.scanMixin";

const scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ (() => {
  const createScanObserver: <T, TAcc>(
    delegat: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (<T, TAcc>() => {
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
    StatefulContainerLike__scan(liftEnumerableObservableT),
  );
})();

export default scan;
