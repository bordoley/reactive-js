import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { EverySatisfy } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { Predicate, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx";
import { getScheduler } from "../../ObserverLike";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__everySatisfyMixin from "../SinkLike/SinkLike.everySatisfyMixin";
import ObservableLike__lift from "./ObservableLike.lift";

const ObservableLike__everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = ObserverLike__mixin();
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArrayLike__toRunnableObservable());

    const everySatisfyObserverMixin = mix(
      include(typedEverySatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(everySatisfyObserverMixin),
        partial(predicate),
        ObservableLike__lift(true, true),
      );
  })();

export default ObservableLike__everySatisfy;
