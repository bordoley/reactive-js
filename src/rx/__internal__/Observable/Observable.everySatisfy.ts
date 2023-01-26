import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { EverySatisfy } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Predicate, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_everySatisfyMixin from "../Sink/Sink.everySatisfyMixin";
import Observable_lift from "./Observable.lift";

const Observable_everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer_mixin();
    const typedEverySatisfySinkMixin = Sink_everySatisfyMixin<
      ObservableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray_toRunnableObservable());

    const everySatisfyObserverMixin = mix(
      include(typedEverySatisfySinkMixin, typedObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);

        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(everySatisfyObserverMixin),
        partial(predicate),
        Observable_lift(true, true),
      );
  })();

export default Observable_everySatisfy;
