import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { Pairwise } from "../../../containers.js";
import { pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import Observable_lift from "./Observable.lift.js";

const Observable_pairwise: Pairwise<ObservableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const createPairwiseObserver: <T>(
      delegate: ObserverLike<readonly [T, T]>,
    ) => ObserverLike<T> = (<T>() => {
      const typedPairwiseSinkMixin = Sink_pairwiseMixin<T>();
      const typedObserverMixin = Observer_mixin<T>();

      return createInstanceFactory(
        mix(
          include(typedObserverMixin, typedPairwiseSinkMixin),
          function PairwiseObserver(
            instance: unknown,
            delegate: ObserverLike<readonly [T, T]>,
          ): ObserverLike<T> {
            init(
              typedObserverMixin,
              instance,
              delegate[ObserverLike_scheduler],
            );
            init(typedPairwiseSinkMixin, instance, delegate);

            return instance;
          },
        ),
      );
    })();

    return pipe(createPairwiseObserver, Observable_lift(true), returns);
  })();

export default Observable_pairwise;
