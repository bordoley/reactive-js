import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainer$scan from "../../../containers/__internal__/StatefulContainer/StatefulContainer.scan";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, pipe } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";

import Observer$mixin from "../Observer/Observer.mixin";
import Sink$scanMixin from "../Sink/Sink.scanMixin";
import Observable$liftEnumerableOperatorT from "./Observable.liftEnumerableOperatorT";

const Observable$scan: Scan<ObservableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanObserver: (
    delegate: ObserverLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ObserverLike<T> = (() => {
    const typedScanSinkMixin = Sink$scanMixin<T, TAcc>();

    const typedObserverMixin = Observer$mixin<T>();

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
    StatefulContainer$scan<ObservableLike, T, TAcc, TReactive>(
      Observable$liftEnumerableOperatorT,
    ),
  );
})();

export default Observable$scan;
