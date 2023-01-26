import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { SomeSatisfy } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Predicate, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_someSatisfyMixin from "../Sink/Sink.someSatisfyMixin";
import Observable_lift from "./Observable.lift";

const Observable_someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer_mixin();
    const typedSomeSatisfySinkMixin = Sink_someSatisfyMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray_toRunnableObservable());

    const someSatisfyObserverMixin = mix(
      include(typedSomeSatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(someSatisfyObserverMixin),
        partial(predicate),
        Observable_lift(true, true),
      );
  })();

export default Observable_someSatisfy;
