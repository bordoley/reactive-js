import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Predicate,
  compose,
  negate,
  partial,
  pipe,
} from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";

type ObservableEverySatisfy = <C extends ObservableLike, T>(
  predicate: Predicate<T>,
) => ContainerOperator<C, T, boolean>;
const Observable_everySatisfy: ObservableEverySatisfy = /*@__PURE__*/ (<
  T,
>() => {
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

  return ((predicate: Predicate<T>) =>
    pipe(
      createInstanceFactory(everySatisfyObserverMixin),
      partial(predicate),
      Enumerable_lift,
    )) as ObservableEverySatisfy;
})();

export default Observable_everySatisfy;
