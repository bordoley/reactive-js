import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { Scan } from "../../../containers.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";

import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import Observable_liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT.js";

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
