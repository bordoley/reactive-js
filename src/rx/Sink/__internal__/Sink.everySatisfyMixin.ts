import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, compose, negate } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Sink_satisfyMixin from "./Sink.satisfyMixin.js";

const Sink_everySatisfyMixin: <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<boolean>,
  Predicate<T>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
) => {
  const typedSatisfySinkMixin = Sink_satisfyMixin<C, T>(
    fromReadonlyArray,
    true,
  );

  return mix(
    include(typedSatisfySinkMixin),
    function EverySatisfySink(
      instance: unknown,
      delegate: ObserverLike<boolean>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(
        typedSatisfySinkMixin,
        instance,
        delegate,
        compose(predicate, negate),
      );

      return instance;
    },
    props<unknown>({}),
    getPrototype(typedSatisfySinkMixin),
  );
};

export default Sink_everySatisfyMixin;
