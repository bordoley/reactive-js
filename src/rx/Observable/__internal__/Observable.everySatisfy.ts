import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { EverySatisfy } from "../../../containers.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_everySatisfyMixin from "../../Sink/__internal__/Sink.everySatisfyMixin.js";
import Observable_lift from "./Observable.lift.js";

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
      props<unknown>({}),
      Observer_decorateNotifyForDev(typedEverySatisfySinkMixin),
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(everySatisfyObserverMixin),
        partial(predicate),
        Observable_lift(true, true),
      );
  })();

export default Observable_everySatisfy;
