import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { EverySatisfy } from "../../../containers.js";
import {
  Predicate,
  compose,
  negate,
  partial,
  pipe,
} from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";
import Observable_lift from "./Observable.lift.js";

const Observable_everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSatisfyObserverMixin = Observer_satisfyMixin<T>(true);

    const everySatisfyObserverMixin = mix(
      include(typedSatisfyObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(
          typedSatisfyObserverMixin,
          instance,
          delegate,
          compose(predicate, negate),
        );

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
