import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { SomeSatisfy } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_someSatisfyMixin from "../../Sink/__internal__/Sink.someSatisfyMixin.js";
import Observable_lift from "./Observable.lift.js";

const Observable_someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = Observer_mixin();
    const typedSomeSatisfySinkMixin = Observer_someSatisfyMixin<
      ObservableLike<boolean>,
      T
    >(ReadonlyArray_toRunnable());

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
      props<unknown>({}),
      Observer_decorateNotifyForDev(typedSomeSatisfySinkMixin),
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(someSatisfyObserverMixin),
        partial(predicate),
        Observable_lift(true, true),
      );
  })();

export default Observable_someSatisfy;
