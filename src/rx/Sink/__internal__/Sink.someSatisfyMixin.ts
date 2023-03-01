import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";

import Observer_satisfyMixin from "./Sink.satisfyMixin.js";

const Observer_someSatisfyMixin: <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<boolean>,
  Predicate<T>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
) => {
  const typedSatisfySinkMixin = Observer_satisfyMixin<C, T>(
    fromReadonlyArray,
    false,
  );

  return mix(
    include(typedSatisfySinkMixin),
    function EverySatisfySink(
      instance: unknown,
      delegate: ObserverLike<boolean>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(typedSatisfySinkMixin, instance, delegate, predicate);
      return instance;
    },
    props<unknown>({}),
    getPrototype(typedSatisfySinkMixin),
  );
};

export default Observer_someSatisfyMixin;
