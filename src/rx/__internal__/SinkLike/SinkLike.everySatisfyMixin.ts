import { Mixin2, include, init, mix } from "../../../__internal__/mixins";
import { Predicate, compose, negate } from "../../../functions";
import { ReactiveContainerLike, SinkLike } from "../../../rx";

import SinkLike__satisfyMixin from "./SinkLike.satisfyMixin";

const SinkLike__everySatisfyMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromArray: (v: readonly boolean[]) => C,
) => Mixin2<SinkLike<T>, TSink, Predicate<T>> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<boolean>,
  T,
>(
  fromArray: (v: readonly boolean[]) => C,
) => {
  const typedSatisfySinkMixin = SinkLike__satisfyMixin<C, TSink, T>(
    fromArray,
    true,
  );

  return mix(
    include(typedSatisfySinkMixin),
    function EverySatisfySink(
      instance: unknown,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(
        typedSatisfySinkMixin,
        instance,
        delegate,
        compose(predicate, negate),
      );
      return instance;
    },
  );
};

export default SinkLike__everySatisfyMixin;
