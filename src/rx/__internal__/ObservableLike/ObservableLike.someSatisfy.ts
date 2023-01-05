import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { SomeSatisfy } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { Predicate, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__someSatisfyMixin from "../SinkLike/SinkLike.someSatisfyMixin";
import ObservableLike__lift from "./ObservableLike.lift";

const ObservableLike__someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = ObserverLike__mixin();
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArrayLike__toRunnableObservable());

    const someSatisfyObserverMixin = mix(
      include(typedSomeSatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(
          typedObserverMixin,
          instance,
          ObserverLike__getScheduler(delegate),
        );
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(someSatisfyObserverMixin),
        partial(predicate),
        ObservableLike__lift(true, true),
      );
  })();

export default ObservableLike__someSatisfy;
