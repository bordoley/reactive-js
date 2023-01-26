import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { EverySatisfy } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Predicate, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$everySatisfyMixin from "../Sink/Sink.everySatisfyMixin";
import Observable$lift from "./Observable.lift";

const Observable$everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer$mixin();
    const typedEverySatisfySinkMixin = Sink$everySatisfyMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray$toRunnableObservable());

    const everySatisfyObserverMixin = mix(
      include(typedEverySatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(everySatisfyObserverMixin),
        partial(predicate),
        Observable$lift(true, true),
      );
  })();

export default Observable$everySatisfy;
