import { Mixin2, include, init, mix } from "../../../__internal__/mixins";
import { Predicate } from "../../../functions";
import { ReactiveContainerLike, SinkLike } from "../../../rx";

import Sink$satisfyMixin from "./Sink.satisfyMixin";

const Sink$someSatisfyMixin: <
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
  const typedSatisfySinkMixin = Sink$satisfyMixin<C, TSink, T>(
    fromArray,
    false,
  );

  return mix(
    include(typedSatisfySinkMixin),
    function EverySatisfySink(
      instance: unknown,
      delegate: TSink,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(typedSatisfySinkMixin, instance, delegate, predicate);
      return instance;
    },
  );
};

export default Sink$someSatisfyMixin;
