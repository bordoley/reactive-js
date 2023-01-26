import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { SomeSatisfy } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Predicate, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$someSatisfyMixin from "../Sink/Sink.someSatisfyMixin";
import Observable$lift from "./Observable.lift";

const Observable$someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer$mixin();
    const typedSomeSatisfySinkMixin = Sink$someSatisfyMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray$toRunnableObservable());

    const someSatisfyObserverMixin = mix(
      include(typedSomeSatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(someSatisfyObserverMixin),
        partial(predicate),
        Observable$lift(true, true),
      );
  })();

export default Observable$someSatisfy;
