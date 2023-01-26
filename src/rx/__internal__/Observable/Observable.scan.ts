import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainer_scan from "../../../containers/__internal__/StatefulContainer/StatefulContainer.scan";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";

import Observer_mixin from "../Observer/Observer.mixin";
import Sink_scanMixin from "../Sink/Sink.scanMixin";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable_scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanObserver: (
    delegate: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (() => {
    const typedScanSinkMixin = Sink_scanMixin<T, TAcc>();

    const typedObserverMixin = Observer_mixin<T>();

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
    StatefulContainer_scan<ObservableLike, T, TAcc, TReactive>(
      Observable_liftEnumerableOperatorT,
    ),
  );
})();

export default Observable_scan;
