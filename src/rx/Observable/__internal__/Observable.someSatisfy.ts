import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_satisfyMixin from "../../Observer/__internal__/Observer.satisfyMixin.js";

type ObservableSomeSatisfy = <C extends ObservableLike, T>(
  predicate: Predicate<T>,
) => ContainerOperator<C, T, boolean>;
const Observable_someSatisfy: ObservableSomeSatisfy = /*@__PURE__*/ (<T>() => {
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
      Enumerable_lift,
    );
})() as ObservableSomeSatisfy;

export default Observable_someSatisfy;
