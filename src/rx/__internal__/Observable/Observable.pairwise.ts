import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { Pairwise } from "../../../containers";
import { pipe, returns } from "../../../functions";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
} from "../../../rx";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$pairwiseMixin from "../Sink/Sink.pairwiseMixin";
import Observable$lift from "./Observable.lift";

const Observable$pairwise: Pairwise<ObservableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const createPairwiseObserver: <T>(
      delegate: ObserverLike<readonly [T, T]>,
    ) => ObserverLike<T> = (<T>() => {
      const typedPairwiseSinkMixin = Sink$pairwiseMixin<T>();
      const typedObserverMixin = Observer$mixin<T>();

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

    return pipe(createPairwiseObserver, Observable$lift(true), returns);
  })();

export default Observable$pairwise;
