import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { SomeSatisfy } from "../../../containers.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

const Observable_someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSatisfyObserverMixin = Observer_satisfyMixin(false);

    const someSatisfyObserverMixin = mix(
      include(typedSatisfyObserverMixin),
      function EverySatisfyObserver(
        instance: unknown,
        delegate: ObserverLike<boolean>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedSatisfyObserverMixin, instance, delegate, predicate);
        return instance;
      },
    );

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(someSatisfyObserverMixin),
        partial(predicate),
        Observable_liftEnumerableOperator,
      );
  })();

export default Observable_someSatisfy;
